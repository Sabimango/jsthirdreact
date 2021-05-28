import "./index.css";

import { useState } from "react";

export default function Header() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="top-header">
      <nav className="nav">
        <button
          onClick={() => setShowLinks((prev) => !prev)}
          className="nav-button"
          id="nav-button"
        >
          <i className="fas fa-bars"></i>
        </button>

        {showLinks && (
          <ul className="nav-links" id="nav-links">
            <li>
              <a href="#aboutme">About Me</a>
            </li>

            <li>
              <a href="#portfolio">Portfolio</a>
            </li>

            <li>
              <a href="#instagram">Instagram</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
