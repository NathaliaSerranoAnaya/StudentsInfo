const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    id: Number,
    age: Number,
    Program: String,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
  });
  
const Student = mongoose.model('Student', studentSchema);
  

