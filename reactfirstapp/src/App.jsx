import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="form-container">
        <h1>Registration Form</h1>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Gender</label>

            <div className="radio-group">
              <label>
                <input type="radio" name="gender" />
                Male
              </label>

              <label>
                <input type="radio" name="gender" />
                Female
              </label>

              <label>
                <input type="radio" name="gender" />
                Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Select Course</label>

            <select>
              <option>Select Course</option>
              <option>Flutter</option>
              <option>React</option>
              <option>Java</option>
              <option>Python</option>
            </select>
          </div>

          <div className="form-group">
            <label>Skills</label>

            <div className="skill-group">
              <label>
                <input type="checkbox" />
                Java
              </label>

              <label>
                <input type="checkbox" />
                React
              </label>

              <label>
                <input type="checkbox" />
                Python
              </label>

              <label>
                <input type="checkbox" />
                Flutter
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Country</label>

            <select>
              <option>USA</option>
              <option>India</option>
              <option>UK</option>
              <option>Canada</option>
            </select>
          </div>

          <div className="form-group">
            <label>Address</label>

            <textarea placeholder="Enter your address"></textarea>
          </div>

          <div className="form-group">
            <label>Website</label>

            <input type="url" placeholder="https://example.com" />
          </div>

          <div className="form-group">
            <label>Preferred Time</label>

            <input type="time" />
          </div>

          <div className="form-group">
            <label>Favorite Color</label>

            <input type="color" className="color" defaultValue="#a98c7c" />
          </div>

          <div className="form-group">
            <label>Experience: 3 Years</label>

            <input type="range" min="0" max="10" defaultValue="3" />
          </div>

          <div className="form-group">
            <label>Upload Photo</label>

            <input type="file" />
          </div>

          <div className="terms">
            <input type="checkbox" />
            <span>I agree to the Terms and Conditions</span>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default App;
