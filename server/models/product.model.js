const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be at least 5 characters."]
    },
    price: {
        type: Number,
        required: [true, "You must input a price."]
    },
    desc: {
        type: String,
        required:[true, "Please provide a brief description."]
    }
},{timestamps:true});

//Export the model
module.exports = mongoose.model('Product', productSchema);