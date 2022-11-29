// const Service = require("../service");
const locationModel = require("../Models/locationModel")

module.exports = {
  Add: async (data) => {
    let userdata = new locationModel({
      userId:data.userId, 
      name: data.name,
      address: data.address, 
     location:{
      type:"Point", 
      coordinates:[parseFloat(data.latitude),parseFloat(data.longitude)]
     }
    });
    let user = await userdata.save();
    if (user) {
      return {
        status: "Success", 
        message: "Add location successfull",
        user: user,
      };
    } else {
      return {
        status: "unSuccess",
        message: " unable to Add location ",
        user: user,
      };
    }
  },
  get: async (data,req,res) => {
    try {
      const latitude=req.body.latitude;
      const longitude=req.body.longitude;
     const store_data=await locationModel.aggregate([
        {
          $geoNear:{
            near:{type:"Point",coordinates:[parseFloat(longitude),parseFloat(latitude)]},
            key:"location",
            maxDistance:parseFloat(20000)*1609, 
            distanceField:"dist.calculated",
            spherical:true
          }
        }
      ])
      return{
        status:true,
        data:store_data
      }
    } catch (error) {
      return{
        status:false,
        msg:error.message
      }
    }
  },
};
