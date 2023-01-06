import { useState, useEffect } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import Box from '@mui/material/Box';


const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [compMessage, setCompMessage] = useState("")
  const [levelcount, setLevelCount] = useState(0)

  const levelnames = ["Please Introduce Yourself", "The Beginning", "The End"]
  const introcompmessages = ["Welcome to Passwordle. Please sign up using the form below."]

  // useEffect(() => { //retrieves username and password from local storage when page opened:
  //   const storedUsername = JSON.parse(localStorage.getItem("username"))
  //   if (storedUsername) {
  //     setUsername(storedUsername)
  //   }
  //   const storedPassword = JSON.parse(localStorage.getItem("password"))
  //   if (storedPassword) {
  //     setPassword(storedPassword)
  //   }
  // }, [])

  // useEffect(() => { //saves username to local storage in case of page refresh
  //   localStorage.setItem("username", JSON.stringify(username))
  // }, [username])

  // useEffect(() => {
  //   localStorage.setItem("password", JSON.stringify(password))
  // }, [password])

  useEffect(() => {
    setCompMessage(introcompmessages[levelcount])
  }, [levelcount])

  const handleSignIn = (username, password, remember) => {
    setUsername(username)
    if (remember) {setRemember(true)}
    if (levelcount == 0) {
      // console.log(password.length)
      if (!username) {
        setCompMessage("Error: Please enter a username.")
      }
      else if (!password) {
        setCompMessage("Error: Please enter a password.")
      }
      else if(password.length < 6) {
        setCompMessage("Error: Your password cannot be shorter than 6 characters.")
      }
      else if(password.length>255) {
        setCompMessage('Error: Your password cannot be longer than 255 characters')
      }
      else {
        if (remember) {
          setCompMessage("Fantastic! [" + username + "] is a great username and [" + password + "] is an... okay password. But I guess it'll do for now.")

        }
        else {
          setCompMessage("Ooh! You didn't tell us to remember you. Sorry!")
        }
      }
    }
  }

  return (
    <div className="App">
      <h2>Passwordle</h2>
      <p>Computer Voice: <b>{compMessage}</b></p>
      <SignIn onSubmit={handleSignIn}></SignIn>

      <Box
      sx={{
        backgroundColor: "#fffbed",
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
      <Button onClick={() => {
        setLevelCount(0)
        setCompMessage(introcompmessages[levelcount]) //in case it's already at level 0:
        setUsername("")
        setPassword("")
    }
      }>
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
