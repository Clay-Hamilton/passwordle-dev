import React, { useState } from 'react';
import Modal from 'react-modal';

const LoginModal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the username and password here, such as logging the user in
    if (username == "clayham" && password == "hunter123") {
      alert("You have logged in successfully!")
    }
    else {
      alert("Wrong!")
    }
    setShowModal(false);
  }

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open login modal</button>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}

export default LoginModal;