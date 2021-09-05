const mongoose = require('mongoose')

const internSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        hire: {
            type: String,
            required: true,
        },
        hear: {
            type: String,
            required: true,
        },
       
        course: {
            type: String,
            required: true,
        },
        story: {
            type: String,
            required: true,
        },
        
        linkedIn: {
            type: String,
            required: true,
        },
        resume: {
            type: String
        }
    },
    { timestamps: true }

);

module.exports = mongoose.model('InternshipForm', internSchema);