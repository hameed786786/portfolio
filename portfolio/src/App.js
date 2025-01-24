import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Hameed's Portfolio</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* Content */}
      <div id="home" className="home">
        <h1>Welcome to My Portfolio</h1>
        <p>I’m a passionate Full-Stack Developer focused on delivering innovative solutions.</p>
        <button className="cta-button">Discover More</button>
      </div>

      <div id="about" className="section about">
        
        <p>
        I am an Artificial Intelligence and Data Science undergraduate with a passion for developing intelligent solutions and leveraging data to solve real-world problems. I specialize in building web applications, mastering the MERN stack, and exploring the limitless potential of AI and data-driven technologies. I thrive on solving complex challenges and continuously improving my skills to stay ahead in the evolving tech landscape.
        </p>
        <div className="about-links">
          <a
            href="https://www.linkedin.com/in/peer-mohideen-hameed-0a0513300"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            Visit My LinkedIn
          </a>
          <a
            href="https://github.com/hameed786786"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            Visit My GitHub
          </a>
        </div>
        
      </div>

      <div id="projects" className="section projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Museum Chatbot</h3>
            <p>A chatbot for ticket booking.</p>
            
          </div>
          <div className="project-card">
            <h3>To-Do List App</h3>
            <p>Simple to-do list app.</p>
            
          </div>
          <div className="project-card">
            <h3>Event Remainder App</h3>
            <p>Helps to track events</p>
          </div>
        </div>
      </div>

      <div id="skills" className="section skills">
        <h2>My Skills</h2>
        <div className="skill-cloud">
          {["JAVA", "DSA", "MongoDB", "Flutter", "Python", "Tableau", "Power BI"].map(
            (skill, index) => (
              <span key={index} className="skill">{skill}</span>
            )
          )}
        </div>
      </div>

      <div id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Email: mohamedishaq499@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/peer-mohideen-hameed-0a0513300"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/hameed786786"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 My Portfolio. Crafted with ❤️ by A.Peer Mohideen Hameed</p>
        <p>
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/peer-mohideen-hameed-0a0513300"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/hameed786786"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </p>
      </footer>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ⬆ Back to Top
      </button>
    </div>
  );
}

export default App;
