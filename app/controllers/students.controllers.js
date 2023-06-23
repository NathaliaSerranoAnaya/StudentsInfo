const Student = require('../models/students.model');

// Fetch all students
exports.findAll = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching students' });
  }
};

// Fetch a single student by id
exports.findOne = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching student' });
  }
};

// Add a new student
exports.create = async (req, res) => {
  try {
    const student = new Student(req.body);
    const newStudent = await student.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Error creating student' });
  }
};

// Update a student by id
exports.update = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating student' });
  }
};

// Delete a student by id
exports.delete = async (req, res) => {
  try {
    const student = await Student.findByIdAndRemove(req.params.id);
    if (student) {
      res.json({ message: 'Student deleted' });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting student' });
  }
};

  
  
