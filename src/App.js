import { useState } from 'react';
import './App.css';


const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // const submitBad = (e) => {
  //   e.preventDefault()
  //   alert("You suck!")
  // }
  const submit = (e) => {
    e.preventDefault()
    if (username == "clayham" && password == "hunter123") {
      alert("You have logged in successfully!")
    }
    else {
      alert("Wrong!")
    }
    // alert("Username: " + username + " Password: " + password)
    // console.log("Username: " + username + " Password: " + password)
  }

  return (
    <div className="App">
      <h1>Passwordle</h1>
      <p>Username:</p>
      <form onSubmit={submit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </form>
      <p>Password:</p>
      <form onSubmit={submit}>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>
    </div>
  )
}

export default App;
