import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:5000/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // READ
  const getStudents = async () => {
    try {
      setError("");

      const response = await axios.get(API);

      setStudents(response.data);
    } catch (error) {
      setError("Cannot connect to server. Check whether Node.js is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  // CREATE + UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !course.trim()) {
      alert("Please enter name and course");
      return;
    }

    try {
      if (editId !== null) {
        await axios.put(`${API}/${editId}`, {
          name,
          course,
        });
      } else {
        await axios.post(API, {
          name,
          course,
        });
      }

      setName("");
      setCourse("");
      setEditId(null);

      await getStudents();
    } catch (error) {
      alert(error.response?.data?.message || "Operation failed");
    }
  };

  // EDIT
  const handleEdit = (student) => {
    setEditId(student.id);
    setName(student.name);
    setCourse(student.course);
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this student?")) return;

    try {
      await axios.delete(`${API}/${id}`);

      await getStudents();
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>
      <p>React + Node.js + Express API CRUD</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">
          {editId !== null ? "Update Student" : "Add Student"}
        </button>

        {editId !== null && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setName("");
              setCourse("");
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2>Students ({students.length})</h2>

      {loading && <p>Loading students...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>
                    <button onClick={() => handleEdit(student)}>Edit</button>

                    <button
                      className="delete"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td colSpan="4">No students found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
