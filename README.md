# 💬 Mini WhatsApp - Chat Management App using MongoDB

## 📖 About the Project

Mini WhatsApp is a lightweight chat management web application that mimics a simplified version of WhatsApp's core functionality — sending, editing, and deleting messages. It is built using **Node.js**, **Express**, **MongoDB**, and **EJS** templating engine.

This project is perfect for learning full-stack development concepts like RESTful routing, CRUD operations, EJS templating, MongoDB schema design, and more.

## 📷 UI Preview

![Mini WhatsApp - Chat Management App using MongoDB]()

## 🎥 Video Demo

[Click here to watch the demo](https://github.com/Priyash-Das/Photos/blob/main/Mini%20WhatsApp%20-%20Chat%20Management%20App.mp4)  

## ✨ Features

- 📨 Create new chats
- 📝 Edit existing messages
- 🗑️ Delete messages
- 🧾 Timestamp each message (created and edited)
- 🗃️ Uses **MongoDB** as the database to store chat messages
- 🎨 Minimal UI with custom CSS styling
- 📁 RESTful route design

## 🗂️ Project Structure

```
Project-root/
        │
        ├──── models/
        │       └──── chat.js
        │
        ├── node_modules/
        │
        ├──── public/
        │       └──── style.css
        │
        └──── views/
        │    ├──── edit.ejs
        │    ├──── index.ejs
        │    └──── new.ejs
        │
        ├──── index.js
        ├──── init.js
        ├──── package-lock.json
        └──── package.json
```

## ⚙️ Tools and Tech Stack

- **Node.js** – Backend JavaScript runtime
- **Express.js** – Minimalist web framework for Node
- **MongoDB** – NoSQL database used for storing chat messages
- **Mongoose** – ODM for MongoDB, used to define schema and interact with MongoDB
- **EJS** – Templating engine for generating HTML with JS
- **HTML5 & CSS3** – Markup and styling
- **Method-Override** – Middleware to support PUT & DELETE from forms
- **Nodemon** *(optional)* – For development, auto-restarts server on file change
