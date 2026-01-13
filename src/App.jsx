import { useState } from "react";
import "./App.css";
import Home from "./Home";
import Users from "./Users";
import Posts from "./Posts";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="container">
      <h1>Gestion des Articles</h1>
      
      <nav>
        <ul className="nav-menu">
          <li>
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); setCurrentPage("home"); }}
              className={currentPage === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#posts" 
              onClick={(e) => { e.preventDefault(); setCurrentPage("posts"); }}
              className={currentPage === "posts" ? "active" : ""}
            >
              Posts
            </a>
          </li>
          <li>
            <a 
              href="#users" 
              onClick={(e) => { e.preventDefault(); setCurrentPage("users"); }}
              className={currentPage === "users" ? "active" : ""}
            >
              Users
            </a>
          </li>
        </ul>
      </nav>

      <div className="main-route-place">
        {currentPage === "home" && <Home />}
        {currentPage === "users" && <Users />}
        {currentPage === "posts" && <Posts />}
      </div>
    </div>
  );
}

export default App;