import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './login.css';

async function loginOrCreate(endpoint, username, password, redirectCallback) {
  try {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      localStorage.setItem('userName', username);
      useNavigate('/home');
    } else {
      const body = await response.json();
      let errorMessage;

      if (response.status === 409) {
        errorMessage = '⚠ Error: Username is already taken.';
      } else if (response.status === 401 && body.msg === 'Unauthorized') {
        errorMessage = '⚠ Error: Invalid username or password.';
      } else {
        errorMessage = `⚠ Error: ${body.msg}`;
      }

      alert(errorMessage);
    }
  } catch (error) {
    console.error('Unexpected error during authentication:', error);
  }
}

async function getUser(username) {
  const response = await fetch(`/api/user/${username}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();



  const loginUser = () => {
    loginOrCreate('/api/auth/login', username, password, redirectToPage);
  };

  const createUser = () => {
    loginOrCreate('/api/auth/create', username, password, redirectToPage);
  };

  const redirectToPage = (page) => {
    history(page);
  };

  return (
    <main className="main-content">
      <div className="text-black">
        <h5 className="text-black mb-4">Login</h5>
        <div className="mb-4">
          <div className="mb-2">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="button" className="btn btn-primary" onClick={() => loginUser()}>
            Login
          </Button>
          <Button type="button" className="btn btn-primary" onClick={() => createUser()}>
            Create
          </Button>
        </div>
      </div>
    </main>
  );
}
