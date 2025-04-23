const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const app = express();
const port = 8080;
const path = require('path');
const Chat = require('./models/chat.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // For parsing data
app.use(methodOverride('_method'));

main().then(() => { 
    console.log('Connected to MongoDB'); 
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Root is working');
});

// Index Route
app.get('/chats', async (req, res) => {
    let chats = await Chat.find();
    res.render('index.ejs', { chats });
});

// New Route
app.get('/chats/new', (req, res) => {
    res.render('new.ejs');
});

// Create Route
app.post('/chats', (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({ 
        from: from, 
        to: to,  
        msg: msg,
        createdAt: new Date(),
    });
    newChat.save().then((res) => {
        console.log('Chat saved successfully');
    }).catch((err) => console.log(err));
    res.redirect('/chats');
});

// Edit Route
app.get('/chats/:id/edit', async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render('edit.ejs', { chat });
});

// Update Route
app.put('/chats/:id', async (req, res) => {
    let { id } = req.params;
    let { msg : newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true }, { new: true });
    res.redirect('/chats');
});

// Delete Route
app.delete('/chats/:id', async (req, res) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
});