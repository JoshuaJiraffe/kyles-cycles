import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='body'>App will display here
        <header className="header">
                    <h1 className="logo"> Kyle's Cycles</h1>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="index.html" >Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    
                    
                    <div className="position-absolute top-0 end-0 p-4">
                        <a href="admin.html" className="text-decoration-none text-secondary" id="admin">Login</a>
                    </div>
                    <div className="position-absolute top-1 end-0 p-2" id="logout" style="display: none">
                        <button type="button" className="btn" onclick="logout()">Logout</button>
                    </div>
                    
        </header>
        
        <main className="main-content">Stuff goes here</main>

        <footer className="footer justify-content-between">
            <div className="d-flex justify-content-between">
                <div className="left-part ms-3 text-secondary">
                    <p>Joshua Nielsen</p>
                </div>
                <div className="middle-part">
                    <h12> Something doesn't look right? Shoot us an email at kyles.cycles.help@gmail.com</h12>
                </div>
                <div className="right-part me-3">
                    <a href="https://github.com/JoshuaJiraffe/startup-kyles-cycles.git" className=" text-decoration-none text-secondary">GitHub</a>
                </div>
            </div>
        </footer>
    </div>
  );
}