const Model = require("../models");

exports.addUser = (data) => {
  return Model.locationModel.save(data);
};

exports.getuser=(data)=>{
  return Model.locationModel.findAll()
}