const mongoose = require('mongoose');

module.exports = {
    url: 'mongodb+srv://nserran:v19NMzUq6cpiZFuO@cluster0.uthqs9j.mongodb.net/?retryWrites=true&w=majority'
}

mongoose.connect('mongodb+srv://nserran:v19NMzUq6cpiZFuO@cluster0.uthqs9j.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


  
