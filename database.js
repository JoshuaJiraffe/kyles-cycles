const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('kyles-cycles');
const motorcyclesCollection = db.collection('motorcycles');
const appointmentsCollection = db.collection('appointments');
// const mongoose = require('mongoose')
// const motorcycleSchema = new mongoose.Schema({
//     year: Number,
//     make: String,
//     model: String,
//     price: String,
//     type: String,
//     condition: String,
//     mileage: String,
//     engine: String,
//     recentWorkDone: [String],
//     views: { type: Number, default: 0 },
//     description: String,
//     name: String,
// });

// const MotorcycleModel = mongoose.model('motorcycles', motorcycleSchema);

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

// Function to get all motorcycles from the database
const getMotorcycles = async () => {
    return await motorcyclesCollection.find().toArray();
};

// Function to get a motorcycle by ID from the database
const getMotorcycleById = async (ids) => {
    return await motorcyclesCollection.findOne({ id: ids });
};

// Function to add a new motorcycle to the database
const addMotorcycle = async (motorcycle) => {
    const newMotorcycle = await motorcyclesCollection.insertOne(motorcycle);
    return newMotorcycle;
};

// Function to increment views in the database
const incrementViews = async (motorcycleId) => {
    // Find the document by ID and update the views field
    const updatedMotorcycle = await motorcyclesCollection.findOneAndUpdate(
        { id: motorcycleId },
        { $inc: { views: 1 } }, // Increment the views field by 1
        { returnDocument: 'after' } // Return the updated document
    );

    return updatedMotorcycle;
};

const getViews = async (motorcycleID) => {
    const views = await motorcyclesCollection.findOne({ id: motorcycleID });
    return views;
}

const addAppointment = async (appointment) => {
    const newAppointment = await appointmentsCollection.insertOne(appointment);
    return newAppointment;
}

const getAppointments = async () => {
    return await appointmentsCollection.find().toArray();
};

module.exports = {
    getMotorcycles,
    getMotorcycleById,
    addMotorcycle,
    incrementViews,
    getViews,
    addAppointment,
    getAppointments
};
