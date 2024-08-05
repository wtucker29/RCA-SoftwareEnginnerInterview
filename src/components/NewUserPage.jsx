import React, { useState } from 'react';

const NewUserPage = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    const passwordRequirements = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
    if (!passwordRequirements.test(newPassword)) {
      setMessage('Password must be 8 characters or longer, contain at least one uppercase letter, and contain at least one special character');
      return;
    }

    setMessage('User successfully registered');
    setNewUsername('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="new-user-container">
      <h1>Create a New User</h1>
      <input
        type="text"
        placeholder="New Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
};

export default NewUserPage;