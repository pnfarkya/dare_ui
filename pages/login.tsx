import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Grid, Avatar, Box, TextField, Typography, Button, FormControlLabel, Checkbox, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react'
import { userSignIn } from '../src/Components/repository/userRepo'

class Login extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }

  async handleSubmit(event) {
    const request = {
      email: this.state.loginEmail,
      password: this.state.password
    }
    await userSignIn(request)
  }

  handlePass(value) {
    this.setState({ password: value.target.value })
  }

  handleEmail(value) {
    this.setState({ loginEmail: value.target.value })
  }
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>DARE</title>
          <meta name="description" content="Dare" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={this.handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={this.state.loginEmail}
                onChange={this.handleEmail}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handlePass}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={this.handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </main>
      </div>
    )
  }
}

export default Login
