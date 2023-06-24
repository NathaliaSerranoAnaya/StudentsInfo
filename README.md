# StudentsInfo
The Student Information System is a web application that allows users to manage student records and perform CRUD (Create, Read, Update, Delete) operations. 
It allows to add new students, view student details, update student information, and delete students.

## Features
- Add new students with their details such as name, age, major, created date, and updated date.
- View detailed information for a specific student.
- Update the information of a student.
- Delete a student record.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Usage
The following routes are available for managing student data:

GET /students: Fetch all students
GET /students/:id: Fetch a single student by ID
POST /students: Add a new student
PUT /students/:id: Update a student by ID
DELETE /students/:id: Delete a student by ID
