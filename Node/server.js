const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Rahul", course: "MCA" },
  { id: 2, name: "Aman", course: "BCA" },
];

// READ - Get all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// READ - Get single student
app.get("/api/students/:id", (req, res) => {
  const student = students.find(
    (s) => s.id === Number(req.params.id)
  );

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// CREATE - Add student
app.post("/api/students", (req, res) => {
  const { name, course } = req.body;

  if (!name?.trim() || !course?.trim()) {
    return res.status(400).json({
      message: "Name and course are required",
    });
  }

  const newStudent = {
    id: Date.now(),
    name: name.trim(),
    course: course.trim(),
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});

// UPDATE - Edit student
app.put("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, course } = req.body;

  if (!name?.trim() || !course?.trim()) {
    return res.status(400).json({
      message: "Name and course are required",
    });
  }

  student.name = name.trim();
  student.course = course.trim();

  res.json(student);
});

// DELETE - Remove student
app.delete("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);

  res.json({ message: "Student deleted successfully" });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});