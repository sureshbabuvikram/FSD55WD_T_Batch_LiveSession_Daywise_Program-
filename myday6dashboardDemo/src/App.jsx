// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import DashboardExample from './components/DashboardExample';
import Dashboard from './components/Dashboard';
// import Component from './components/Component';
import CardComponent from './components/CardComponent';
import CustomButtons from './components/CustomButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Sidebar */}
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  DashBoard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
             
              {/* Add link for the Other Component with Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  to="/other"
                  className="nav-link dropdown-toggle"
                  id="otherDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Components
                </Link>
                <div className="dropdown-menu" aria-labelledby="otherDropdown">
                  <Link to="/component/buttons" className="dropdown-item">
                    Custom Buttons
                  </Link>
                  <Link to="/component/cards" className="dropdown-item">
                    Card Component
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link
                  to="/other"
                  className="nav-link dropdown-toggle"
                  id="otherDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <div className="dropdown-menu" aria-labelledby="otherDropdown">
                  <Link to="/page/register" className="dropdown-item">
                    Register
                  </Link>
                  <Link to="/page/login" className="dropdown-item">
                    Login
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 h-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />            
            <Route path="/component/buttons" element={<CustomButtons />} />
            <Route path="/component/cards" element={<CardComponent />} />
            <Route path="/page/register" element={<Register />} />
            <Route path="/page/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </div>
  </Router>
);
};

export default App;

