const BikeModel = require('./model');
const mongoDB = require('./Mongo');

exports.insertBikeInfo = async (req, res) => {
    try {
        await mongoDB.connect();
        
        const bikeInstance = new BikeModel({
            bikeName: req.body.bikeName,
            price: req.body.price,
            cc: req.body.cc,
            speed: req.body.speed,
            mileage: req.body.mileage
        });

        const response = await bikeInstance.save();
        
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
