const mongoose = require('mongoose');
const {Schema} = mongoose;

const BannerSchema = new Schema({
    currencies: [{
        name: String,
        buy: Number,
        sell: Number
    }],
    updated_at: Date
})

mongoose.model('banner', BannerSchema)