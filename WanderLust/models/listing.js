const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: Object,
        default: "https://unsplash.com/photos/a-row-of-wooden-cabins-sitting-on-top-of-a-lush-green-field-GOVYM5XUGz0",
        set: (v) => v === "" ? "https://unsplash.com/photos/a-row-of-wooden-cabins-sitting-on-top-of-a-lush-green-field-GOVYM5XUGz0" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;