import React, { useEffect, useState } from "react";

function UseEffect() {
  const [text, setText] = useState("");
  const [info, setInfo] = useState("");

  // =========================
  // USER INFORMATION
  // =========================

  const user = JSON.parse(localStorage.getItem("user"));

  // =========================
  // TIMER STATES
  // =========================

  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("timer");

    return savedTime !== null ? Number(savedTime) : 600;
  });

  const [isRunning, setIsRunning] = useState(() => {
    return localStorage.getItem("timerRunning") === "true";
  });

  const [minutesInput, setMinutesInput] = useState("");
  const [secondsInput, setSecondsInput] = useState("");

  // =========================
  // LANGUAGE INFORMATION
  // =========================

  useEffect(() => {
    const value = text.trim().toLowerCase();

    if (value === "java") {
      setInfo(
        "Java is a high-level, object-oriented programming language. " +
          "It is widely used for backend development, Android applications, " +
          "enterprise applications and many other software systems.",
      );
    } else if (value === "python") {
      setInfo(
        "Python is a high-level, interpreted programming language. " +
          "It is widely used in Web Development, Data Science, Machine Learning, " +
          "Artificial Intelligence and Automation.",
      );
    } else if (value === "javascript") {
      setInfo(
        "JavaScript is a programming language used to make websites " +
          "interactive and dynamic. It is also widely used with React, " +
          "Node.js and modern web applications.",
      );
    } else if (value === "react") {
      setInfo(
        "React is a JavaScript library used for building modern user interfaces. " +
          "It is based on reusable components and is widely used for frontend development.",
      );
    } else if (value === "c++") {
      setInfo(
        "C++ is a powerful general-purpose programming language. " +
          "It is widely used in system programming, game development, " +
          "competitive programming and high-performance applications.",
      );
    } else if (value === "") {
      setInfo("");
    } else {
      setInfo(
        "Information not available. Try Java, Python, JavaScript, React or C++.",
      );
    }
  }, [text]);

  // =========================
  // TIMER EFFECT
  // =========================

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setTime((previousTime) => {
        if (previousTime <= 1) {
          setIsRunning(false);

          localStorage.setItem("timerRunning", "false");
          localStorage.setItem("timer", "0");

          return 0;
        }

        const newTime = previousTime - 1;

        localStorage.setItem("timer", newTime);

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  // =========================
  // START / PAUSE
  // =========================

  const handleStartPause = () => {
    // Don't start if timer is already 0
    if (time === 0) {
      return;
    }

    const newState = !isRunning;

    setIsRunning(newState);

    localStorage.setItem("timerRunning", newState.toString());
  };

  // =========================
  // SET CUSTOM TIMER
  // =========================

  const handleSetTimer = () => {
    const minutes = Number(minutesInput) || 0;
    const seconds = Number(secondsInput) || 0;

    // Seconds should be between 0-59
    if (minutes < 0 || seconds < 0 || seconds > 59) {
      return;
    }

    const totalSeconds = minutes * 60 + seconds;

    // Don't allow empty/zero timer
    if (totalSeconds <= 0) {
      return;
    }

    setTime(totalSeconds);

    setIsRunning(false);

    localStorage.setItem("timer", totalSeconds);

    localStorage.setItem("timerRunning", "false");

    setMinutesInput("");
    setSecondsInput("");
  };

  // =========================
  // RESET TIMER
  // =========================

  const handleReset = () => {
    setIsRunning(false);

    setTime(600);

    localStorage.setItem("timer", "600");

    localStorage.setItem("timerRunning", "false");
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  // =========================
  // FORMAT TIMER
  // =========================

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="search-page">
      <div className="search-container">
        {/* =========================
            USER PROFILE
        ========================= */}

        {user && (
          <div className="user-profile">
            <div className="user-avatar">
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>

            <div className="user-details">
              <span>WELCOME BACK</span>

              <h3>{user.name}</h3>

              <p>
                {user.email} • {user.role}
              </p>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}

        {/* =========================
            HEADER
        ========================= */}

        <div className="header">
          <span className="badge">REACT USEEFFECT</span>

          <h1>
            Programming Language
            <br />
            Search
          </h1>

          <p>Type a programming language and get information instantly.</p>
        </div>

        {/* =========================
            TIMER
        ========================= */}

        <div className="timer-card">
          <div className="timer-top">
            <div>
              <span className="timer-label">FOCUS TIMER</span>

              <h2>Stay focused. Get things done.</h2>
            </div>

            <div className="timer-status">
              <span
                className={isRunning ? "status-dot active" : "status-dot"}
              ></span>

              {isRunning ? "Running" : "Paused"}
            </div>
          </div>

          {/* TIMER DISPLAY */}

          <div className="timer-display">
            <div className="time-number">
              {String(minutes).padStart(2, "0")}
            </div>

            <div className="time-colon">:</div>

            <div className="time-number">
              {String(seconds).padStart(2, "0")}
            </div>
          </div>

          <div className="timer-caption">
            MINUTES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SECONDS
          </div>

          {/* TIMER BUTTONS */}

          <div className="timer-actions">
            <button className="start-btn" onClick={handleStartPause}>
              {isRunning ? "⏸ Pause" : "▶ Start"}
            </button>

            <button className="reset-btn" onClick={handleReset}>
              ↻ Reset
            </button>
          </div>

          {/* CUSTOM TIMER */}

          <div className="custom-timer">
            <div className="custom-heading">
              <span>Set custom time</span>

              <small>Choose your duration</small>
            </div>

            <div className="timer-input-row">
              <div className="time-input">
                <label>Minutes</label>

                <input
                  type="number"
                  min="0"
                  placeholder="10"
                  value={minutesInput}
                  onChange={(e) => setMinutesInput(e.target.value)}
                />
              </div>

              <div className="time-input">
                <label>Seconds</label>

                <input
                  type="number"
                  min="0"
                  max="59"
                  placeholder="00"
                  value={secondsInput}
                  onChange={(e) => setSecondsInput(e.target.value)}
                />
              </div>

              <button className="set-btn" onClick={handleSetTimer}>
                Set Timer
              </button>
            </div>
          </div>
        </div>

        {/* =========================
            SEARCH
        ========================= */}

        <div className="search-box">
          <label>Search Language</label>

          <input
            type="text"
            placeholder="Try Java, Python, JavaScript..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* =========================
            INFORMATION
        ========================= */}

        <div className="information-card">
          <h2>Information</h2>

          {info ? (
            <p className="info-text">{info}</p>
          ) : (
            <div className="empty-state">
              <div className="search-icon">⌕</div>

              <h3>Search for a language</h3>

              <p>Start typing above to see information here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UseEffect;
