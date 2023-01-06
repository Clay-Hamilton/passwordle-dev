import { useState, useEffect } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import Box from '@mui/material/Box';


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

  const handleSignIn = (username, password) => {
    // console.log("submitted")
    // console.log("Username: " + username + " Password: " + password)
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
      <h3>Computer Voice: {compMessage}</h3>
      <SignIn onSubmit={handleSignIn}></SignIn>
      <Box
      sx={{
        bgcolor: "#fff",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        maxWidth: 500,
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",

      }}
      >
      <h2>Level {levelcount}: {levelnames[levelcount]}</h2>
      <Button onClick={() => setLevelCount(levelcount - 1)}>
        Previous Level
      </Button>
      <Button onClick={() => setLevelCount(0)}>
        Reset
      </Button>
      <Button onClick={() => setLevelCount(levelcount + 1)}>
        Next Level
      </Button>
      </Box>
    </div>
  )
}

export default App;
