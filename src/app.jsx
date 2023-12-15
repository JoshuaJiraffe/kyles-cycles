import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { FormComplete } from './formcomplete/formcomplete';
import { Home } from './home/home';
import { Login } from './login/login';
import { Motorcycle } from './motorcycle/motorcycle';
import { Schedule } from './schedule/schedule';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
        <div className='body'>
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
                                        <NavLink className="nav-link" id="home-link" to="home" >Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" id="about-link" to="about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" id="contact-link" to="contact">Contact us</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                        
                        
                    <div className="position-absolute top-0 end-0 p-4">
                        <NavLink to="admin" className="text-decoration-none text-secondary" id="admin">Login</NavLink>
                    </div>
                    <div className="position-absolute top-1 end-0 p-2" id="logout" style={{ display: 'none' }}>
                        { <button type="button" className="btn" onClick={logout}>Logout</button> }
                    </div>
                        
            </header>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin' element={<Login />} />
                <Route path='/motorcycle' element={<Motorcycle />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/formcomplete' element={<FormComplete />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className="footer justify-content-between">
                <div className="d-flex justify-content-between">
                    <div className="left-part ms-3 text-secondary">
                        <p>Joshua Nielsen</p>
                    </div>
                    <div className="middle-part">
                        <h6> Something doesn't look right? Shoot us an email at kyles.cycles.help@gmail.com</h6>
                    </div>
                    <div className="right-part me-3">
                        <a href="https://github.com/JoshuaJiraffe/startup-kyles-cycles.git" className=" text-decoration-none text-secondary">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }