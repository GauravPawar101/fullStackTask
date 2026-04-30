const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methods = require('express-methods');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/studentsDB').then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const studentsRouter = require("./routes/students");
app.use(studentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});