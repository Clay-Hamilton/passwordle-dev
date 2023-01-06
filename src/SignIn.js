import * as React from 'react';
import { useState } from 'react';
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
  };

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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              // type="password"
              id="password"
              value={passwordForm}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox name="remember" value="remember" color="primary" />}
              label="Remember me"
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}