const BikeModel = require('./model')
const mongoDB = require('./Mongo')

exports.getData = async(req,res) => {

try { 
  await mongoDB.connect()
const response = await BikeModel.find()
res.status(200).json(response)
} catch(error) {
  res.status(500).json({message:error.message})
}


}