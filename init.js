const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(() => { 
    console.log('Connected to MongoDB'); 
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Neha",
        to: "John",
        msg: "Hello John!",
        // createdAt: new Date(),
    },
    {
        from: "John",
        to: "Neha",
        msg: "Hi Neha! How are you?",
        // createdAt: new Date(),
    },
    {
        from: "Neha",
        to: "John",
        msg: "I'm doing well, thank you!",
        // createdAt: new Date(),
    },
    {
        from: "Neha",
        to: "John",
        msg: "What about you? How's your day going?",
        // createdAt: new Date(),
    },
    {
        from: "John",
        to: "Neha",
        msg: "I'm good, too! Just busy with work.",
        // createdAt: new Date(),
    },
    {
        from: "Neha",
        to: "John",
        msg: "Ohh! Okay see you then, I'll catch up with you later.",
        // createdAt: new Date(),
    },
    {
        from: "John",
        to: "Neha",
        msg: "Sure, I'll be there. See you soon!",
        // createdAt: new Date(),
    },
];

Chat.insertMany(allChats).then(() => {
    console.log('Chats inserted successfully');
}).catch(err => {
    console.error('Error inserting chats:', err);
});