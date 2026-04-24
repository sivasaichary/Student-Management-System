const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12123',
  database: 'student_db'
});

db.connect(err => {
  if (err) {
    console.error("DB Error:", err);
    return;
  }
  console.log("Connected to MySQL");
});


// CREATE
app.post('/addStudent', (req, res) => {
  const { name, age, course } = req.body;

  const sql = 'INSERT INTO students (name, age, course) VALUES (?, ?, ?)';
  db.query(sql, [name, age, course], (err) => {
    if (err) return res.send("Error adding student");
    res.send("Student added");
  });
});


// READ
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, result) => {
    if (err) return res.send("Error fetching data");
    res.json(result);
  });
});


// UPDATE
app.put('/updateStudent/:id', (req, res) => {
  const { name, age, course } = req.body;
  const id = req.params.id;

  const sql = 'UPDATE students SET name=?, age=?, course=? WHERE id=?';
  db.query(sql, [name, age, course, id], (err) => {
    if (err) return res.send("Error updating student");
    res.send("Student updated");
  });
});


// DELETE
app.delete('/deleteStudent/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM students WHERE id=?';
  db.query(sql, [id], (err) => {
    if (err) return res.send("Error deleting student");
    res.send("Student deleted");
  });
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
