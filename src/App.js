import { useState, useEffect } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import Box from '@mui/material/Box';
import TypewriterJS from './TypewriterJS';
import MyBox from './MyBox';



const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [compMessage, setCompMessage] = useState("")
  const [levelcount, setLevelCount] = useState(0)
  const [resetForm, setResetForm] = useState(false) //used to reset Username and Password fields:
  const [didTryCapital, setDidTryCapital] = useState(false)
  const [formUsername, setFormUsername] = useState("")
  const [formPassword, setFormPassword] = useState("")
  const [guesscount2, setGuessCount] = useState(0)
  const [usernameerror, setUsernameError] = useState("")
  const [passworderror, setPasswordError] = useState("")
  const [signupenabled, setSignUpEnabled] = useState(true)

  const levelnames = [
    "Please Introduce Yourself", "The Beginning", "The End"
  ]
  const introcompmessages = [
    "Welcome to Passwordle. Please sign up using the form below.",
    "My friend James can't seem to login. Can you enter his password for him?",
    "Your password seems to have been lost in the database. Please reset it. (note: the requirements may have changed)",
    "My friend Erica can't seem to login. Can you enter her password for her? Her password hint was \"the room with no doors or windows\"",
    "For this level you will have no password clues. Only pure intelligence will let you solve it.",
    "You have reached level " + levelcount + ". Clay hasn't designed this one yet.",
    "You have reached level " + levelcount + ". Clay hasn't designed this one yet.",
    "You have reached level " + levelcount + ". Clay hasn't designed this one yet.",
    "You have reached level " + levelcount + ". Clay hasn't designed this one yet.",
    "You have reached level " + levelcount + ". Clay hasn't designed this one yet.",
    "You have reached level " + levelcount + ". Clay hasn't designed this one yet.",
  ]

  const answers = [
    ["clayham", "Funafuti12"],
    ["James", "Hunter123"],
    ["clayham", "Elephant47!"],
    ["Erica", "mushroom"],
    ["clayham", "pureintelligence"],
  ]

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
    if (levelcount == 1) {
      setFormUsername("James")
    }
    else if (levelcount == 3) {
      setFormUsername("Erica")
    }
  }, [levelcount])

  const resetLevel = () => {
    setLevelCount(0)
    newLevel()
  }
  
  const newLevel = () => {
    setCompMessage(introcompmessages[levelcount])
    setUsername("")
    setPassword("")
    setUsernameError("")
    setPasswordError("")
    setResetForm(!resetForm)
    setGuessCount(0)
    setSignUpEnabled(true)
  }

  const forgotPassword = (message) => {
    tempMessage(message)
  }

  const tempMessage = (tempmessage) => {
    const message = compMessage
    setCompMessage(tempmessage)
    setTimeout(() => {
      setCompMessage(message)
    }, tempmessage.length*150)
  }

  const fillAnswer = () => {
    console.log("U: " +answers[levelcount][0])
    console.log("P: " +answers[levelcount][1])
    setFormUsername(answers[levelcount][0])
    setFormPassword(answers[levelcount][1])
  }

  const handleSignIn = (username, password, remember) => {
    if (signupenabled) {
    setUsernameError("")
    setPasswordError("")
    setUsername(username)
    setGuessCount((guesscount2+1))
    if (remember) {setRemember(true)}
    if (levelcount === 0) {
      if (!username) {
        setUsernameError("Please enter a username.")
      }
      else if (!password) {
        setPasswordError("Please enter a password.")
      }
      else if(password.length < 6) {
        setPasswordError("Your password cannot be shorter than 6 characters.")
      }
      else if(password.length > 255) {
        setPasswordError('Your password cannot be longer than 255 characters.')
      }
      else if(password.match(/\s/u)) {
        setPasswordError('Your password cannot include spaces.')
      }
      else if(!password.match(/\d/u)) {
        setPasswordError('Your password must contain a number.')
      }
      else if(!password.match(/[a-z]/u)) {
        setPasswordError('Your password must contain a lowercase letter.')
      }
      else if(!password.match(/[A-Z]/u)) {
        setPasswordError('Your password must contain a capital.')
        setDidTryCapital(true)
      }
      else if(!password.match(/Funafuti/ui)) {
        if (!didTryCapital) {
          setPasswordError('Your password must contain a capital.')
          setDidTryCapital(true)
        }
        else {
          setPasswordError('Specifically, the capital of Tuvalu.')
        }
      }
    
      else {
        if (remember) {
          setSignUpEnabled(false)
          setCompMessage("Fantastic! [" + username + "] is a great username and [" + password + "] is an... okay password. But I guess it'll do for now.")
          setTimeout(() => {
            setLevelCount(levelcount+1)
            newLevel()
          }, compMessage.length*150)
        }
        else {
          setSignUpEnabled(false)
          setCompMessage("Thanks for signing up! Welcome to Passwordle.")
          setTimeout(() => {
            setCompMessage("Ooh! You didn't tell me to remember you, so I... forgot your information. Sorry! You'll have to enter it again. :)")
            setResetForm(!resetForm)
            setTimeout(() => {
              resetLevel()
            }, 6000)
          }, 6000)
        }
      }
    }
    else if (levelcount === 1) {
      if (username !== "James") {
        setUsernameError("Wrong username.")
        setCompMessage("Why did you change his username? Try that again.")
      }
      else if (username === "James" && password === "Hunter123") {
        setCompMessage("Thanks so much for your help. James will appreciate it.")
        setTimeout(() => {
          setLevelCount(levelcount+1)
          newLevel()
        }, 4000)
      }
      else {
        setPasswordError("Incorrect password.")
      }
    }
    else if (levelcount === 2) {//password: Elephant47!
      let lengthguessed = false
      if(password.match(/\s/u)) {
        setPasswordError('Your password cannot include spaces.')
      }
      else if (password.length < 11 && !lengthguessed) {
        setPasswordError("Your password must be longer than " + (password.length) + " characters.")
        lengthguessed = true
      }
      else if (password.length > 11 && !lengthguessed) {
        setPasswordError("Your password must be less than " + (password.length) + " characters.")
        lengthguessed = true
      }
      else if (!password.match(/[A-Z]/) ) {
        setPasswordError("Your password must contain an uppercase letter.")
      }
      else if (!password.match(/^[A-Z]/) ) {
        setPasswordError("Your password must begin with an uppercase letter.")
      }
      else if (!password.match(/Elephant/i) ) {
        setPasswordError("Your password must contain an animal that makes a \"trumpet\" sound.")
      }
      else if (!password.match(/[0-9]/) ) {
        setPasswordError("Your password must contain a number.")
      }
      else if (!password.match(/47/) ) {
        setPasswordError("Your password must contain the largest prime number less than 50.")
      }
      else if (!password.match(/!/) ) {
        setPasswordError("Your password must contain \"excitement\".")
      }
      else if (!password.match(/!$/) ) {
        setPasswordError("Your password must end with \"excitement\".")
      }
      else if (password.length < 11) {
        setPasswordError("Your password must be longer than " + (password.length) + " characters, remember?")
      }
      else if (password.length > 11) {
        setPasswordError("Your password must be less than " + (password.length) + " characters, remember?")
      }
      else {
        setCompMessage("Thank you for setting your password. We'll \"try\" to remember it this time.")
        setTimeout(() => {
          setLevelCount(levelcount+1)
          newLevel()
        }, 5000)
      }
    }
    else if (levelcount === 3) {
      if (username !== "Erica") {
        setUsernameError("Wrong username.")
        setCompMessage("Why did you change her username? Try that again.")
      }
      else if (username === "Erica" && password === "mushroom") {
        setCompMessage("Thanks so much for your help. Erica says to tell you thanks.")
        setTimeout(() => {
          setLevelCount(levelcount+1)
          newLevel()
        }, 4000)
      }
      else {
        setPasswordError("Incorrect password. Remember, her password hint was \"the room with no doors or windows\"")
      }
    }
    else if (levelcount == 4) {
      if (password === "pureintelligence") {
        setCompMessage("Wow, you got it! I honestly didn't think you had it in you.")
        setTimeout(() => {
          setLevelCount(levelcount+1)
          newLevel()
        }, 4000)
      }
      else {
        setPasswordError("Incorrect password.")
        tempMessage("I knew you didn't have what it takes.")
      }
    }
  }
  else {
    console.log("submit disabled")
  }
}

  return (
    <div className="App">
      <h2>Passwordle</h2>
      <TypewriterJS message={compMessage}/>
      <SignIn 
        onSubmit={handleSignIn}
        reset={resetForm}
        formUsername={formUsername}
        formPassword={formPassword}
        forgotPassword={forgotPassword}
        levelcount={levelcount}
        usernameerror={usernameerror}
        passworderror={passworderror}
      >
      </SignIn>

    <MyBox>
      <h2>Level {levelcount}: {levelnames[levelcount]}</h2>
      <Button onClick={() => setLevelCount(levelcount - 1)}>
        Previous Level
      </Button>
      <Button onClick={resetLevel}>
        Reset
      </Button>
      <Button onClick={() => setLevelCount(levelcount + 1)}>
        Next Level
      </Button>
      <Button onClick={newLevel}>
        Reset Level
      </Button>
      <Button onClick={fillAnswer}>
        Answer
      </Button>
     </MyBox>
    </div>
  )
}

export default App;
