const mongoose = require('mongoose');
function dbConnect() {
    const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/e-commerce';
    mongoose.connect(url).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('MongoDB database connection established successfully');
    });
}
module.exports = dbConnect;