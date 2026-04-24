const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12123', // your password
  database: 'student_db'
});

// Connect to DB
db.connect(err => {
  if (err) {
    console.error("DB Error:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Add student
app.post('/addStudent', (req, res) => {
  const { name, age, course } = req.body;

  const sql = 'INSERT INTO students (name, age, course) VALUES (?, ?, ?)';

  db.query(sql, [name, age, course], (err, result) => {
    if (err) {
      console.error(err);
      res.send("Error adding student");
      return;
    }
    res.send('Student added');
  });
});

// Get students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, result) => {
    if (err) {
      console.error(err);
      res.send("Error fetching data");
      return;
    }
    res.json(result);
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});