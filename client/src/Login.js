import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "500px",
    display: "flex",
  },
  gridStyle: {
    margin: "70px auto",
    backgroundColor: "#ebebeb",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signingFormate : {
    margin: "0 10px",
    boxShadow: "none",
  },
}));

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();



  const handleLogin = () => {
    console.log("Username->",userName, "Password ->",password);
  };
  const goToRegisterPage = () => {
    window.location.href = "/Register";
  };
  return (
    <div>
      <Grid className={classes.gridStyle} xs={8}>
        <Paper className={classes.paper}>
          <Grid item xs={6} className={classes.image}></Grid>
          <Grid item xs={6} component={Paper} className={classes.signingFormate}square>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="UserName"
              label="UserName"
              name="UserName"
              autoComplete="UserName"
              autoFocus
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={goToRegisterPage}
            >
              Register User
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default Login;