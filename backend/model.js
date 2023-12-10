const mongoose = require('mongoose')

const BikeSchema = mongoose.Schema({
   bikeName: {
    type :String,
    require: true
   },
   price : {
    type : String,
    require:true
   },
   cc : {
    type :String,
    require:true
   },
   speed : {
    type :String,
    require: true
   },
   mileage : {
    type : Number,
    require: true
   }
},{
    timestamps: true
})

const BikeModel = mongoose.model('bikeModel',BikeSchema)
module.exports = BikeModel