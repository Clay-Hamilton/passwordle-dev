import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SignIn(props) {

  const [usernameForm, setUsernameForm] = useState("")
  const [passwordForm, setPasswordForm] = useState("")
  const [rememberForm, setRememberForm] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => { //resets game:
    setUsernameForm("")
    setPasswordForm("")
    setRememberForm(false)
    setShowPassword(false)
  }, [props.reset])
  

  useEffect(() => {
    setUsernameForm(props.formUsername)
  }, [props.formUsername])

  useEffect(() => {
    setUsernameForm(props.formPassword)
  }, [props.formPassword])

  useEffect(() => {
    setUsernameForm(props.formPassword)
  }, [props.formPassword])


  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props.onSubmit(data.get("username"), data.get("password"), data.get("remember"))
    // setUsernameForm("")
    // setPasswordForm("")
  };

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsernameForm(event.target.value);
    }
    else if (event.target.name === "password") {
      setPasswordForm(event.target.value);
    }
    else if (event.target.name === "remember") {
      setRememberForm(!rememberForm);
    }
    else if (event.target.name === "showpass") {
      if (props.levelcount == 1 && !showPassword) {
        setPasswordForm("Hunter123")
        setShowPassword(true);
      }
      else {
        setShowPassword(!showPassword);
      }
    }
  };

  const forgotPassword = () => {
    props.forgotPassword("I believe in you :)")
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "#fffbed",
            marginTop: 4,
            marginBottom: 4,
            // display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            boxShadow: 1,
            borderRadius: 2,
            boxShadow: 1,
            borderRadius: 1,
            p: 3,
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={usernameForm}
              onChange={handleChange}
              error={!!props.usernameerror}
              helperText={props.usernameerror}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={!showPassword ? "password" : "text"}
              id="password"
              value={passwordForm}
              onChange={handleChange}
              error={!!props.passworderror}
              helperText={props.passworderror}
            />
            <FormControlLabel
              control={
                <Checkbox 
                name="remember" 
                value="remember" 
                color="primary"
                checked={rememberForm}
                onChange={handleChange}
                />
              }
              label="Remember me"
            />
            <FormControlLabel
            control={
              <Checkbox 
                name="showpass" 
                value="showpass" 
                color="primary"
                checked={showPassword}
                onChange={handleChange}
              />
              }
              label="Show password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
              onClick={()=> 
                handleSubmit
              }
            >
              Sign Up
            </Button>
            <Button 
              onClick={forgotPassword}
            >
              Forgot Password?
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}