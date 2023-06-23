const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
const dbConfig = require('./config/database.config');
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
}).then(() => console.log('DB connection successful')).catch(err => {
  console.log('DB connection is not successful...', err);
});

app.get('/', (req, res) => {
  res.json({
    message: 'It is working!!',
  });
});

const studentRoutes = require('./app/routes/students.routes');
studentRoutes(app);

app.listen(3000, () => {
  console.log('Server is running!!!!!');
});





