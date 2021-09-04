const mongoose = require('mongoose')

const newsLetterSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
            required: true,
            lowercase: true
        }
    },
    { timestamps: true }

);

module.exports = mongoose.model('NewsLetter', newsLetterSchema);