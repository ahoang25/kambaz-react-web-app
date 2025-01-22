import { Link } from "react-router";
export default function TOC() {
  return (
    <div>
      <h2>Table of Contents</h2>
      <ul>
        <li>
          <Link to="/Labs/Lab1">Lab 1</Link>
        </li>
        <li>
          <Link to="/Labs/Lab2">Lab 2</Link>
        </li>
        <li>
          <Link to="/Labs/Lab3">Lab 3</Link>
        </li>
        <li>
          <Link to="/Kambaz">Kambaz</Link>
        </li>
        <li>
          <a href="https://github.com/ahoang25/kambaz-react-web-app.git" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </li>
      </ul>
    </div>
  );
}