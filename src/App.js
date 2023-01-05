import { useState, useEffect } from 'react';
import './App.css';
import { useState } from 'react';


const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [compMessage, setCompMessage] = useState("")
  const [levelcount, setLevelCount] = useState(0)

  const levelnames = ["Hello World", "The Beginning", "The End"]

  useEffect(() => { //retrieves username and password from local storage when page opened:
    const storedUsername = JSON.parse(localStorage.getItem("username"))
    if (storedUsername) {
      setUsername(storedUsername)
    }
    const storedPassword = JSON.parse(localStorage.getItem("password"))
    if (storedPassword) {
      setPassword(storedPassword)
    }
  }, [])

  useEffect(() => { //saves username to local storage in case of page refresh
    localStorage.setItem("username", JSON.stringify(username))
  }, [username])

  useEffect(() => {
    localStorage.setItem("password", JSON.stringify(password))
  }, [password])

  const submit = (e) => {
    e.preventDefault()
    if (username == "clayham" && password == "hunter123") {
      setCompMessage("You have logged in successfully!")
      setLevelCount(levelcount+1)
    }
    else {
      setCompMessage("Wrong!")
    }
    // alert("Username: " + username + " Password: " + password)
    // console.log("Username: " + username + " Password: " + password)
  }

  return (
    <div className="App">
      <h1>Passwordle</h1>
      <h2>Level {levelcount}: {levelnames[levelcount]}</h2>
      <button onClick={() => setLevelCount(levelcount - 1)}>
        Previous Level
      </button>
      <button onClick={() => setLevelCount(0)}>
        Reset
      </button>
      <button onClick={() => setLevelCount(levelcount + 1)}>
        Next Level
      </button>
      <h3>Please enter your username:</h3>
      <p>Username:</p>
      <form onSubmit={submit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </form>
      <p>Password:</p>
      <form onSubmit={submit}>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>
      <h3>Computer Voice: {compMessage}</h3>
    </div>
  )
}

export default App;
