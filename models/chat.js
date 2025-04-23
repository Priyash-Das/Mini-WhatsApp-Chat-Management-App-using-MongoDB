const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from : {
        type: String, 
        required: true,
    },
    to : {
        type: String, 
        required: true,
    },
    msg : {
        type: String,
        maxLength: 7450,
    },
    // createdAt : {
    //     type: Date,
    //     default: Date.now, 
    //     required: true,
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now,
    // },
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;