import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const storedUsername = 'testuser';
  const storedPassword = 'testpassword';

  const handleLogin = () => {
    if (username === storedUsername && password === storedPassword) {
      setIsAuthenticated(true);
      history.push('/success');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>New user? <span onClick={() => history.push('/new-user')} style={{color: 'blue', cursor: 'pointer'}}>Create Account</span></p>
    </div>
  );

};

export default LoginPage;