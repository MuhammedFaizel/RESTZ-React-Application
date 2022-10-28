import React, { useState } from 'react';
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, Stack, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Snackbar, Alert, FormHelperText } from '@mui/material';
import { SlSocialGoogle, SlSocialFacebook, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Logo from "../../../assets/images/LoginImage.png"

const userid = "admin@gmail.com"
const password = "admin@gmail.com"

export default function Login({ setLoggedIn }) {

  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [open, setOpen] = useState(false);
  const [missing, setMissing] = useState(false)
  const [opensnackbar, setOpensnackbar] = useState(false);
  const handleClose = () => { setOpen(false); };

  const handleChange = (e, label) => {
    setData({ ...data, [label]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setData({
      ...data,
      showPassword: !data.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClosesnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpensnackbar(false);
  };

  const validate = () => {
    let valid = true;
    let tempError = {};
    if (!data.userid) {
      valid = false;
      tempError.userid = true;
    }
    if (!data.password) {
      valid = false;
      tempError.password = true;
    }
    if (!data.remember) {
      valid = false;
      tempError.remember = true;
    }

    if (!valid) {
      setError(tempError)

    }
    return valid;
  }

  const login = () => {
    if (validate()) {
      //API CAll
      if (data.userid === userid && data.password === password) {
        setLoggedIn(true)
        localStorage.setItem("isLoggedIn", "true")
        handleClose();
        // console.log("logged");
      } else {
        setOpen(true)
        handleClose();
      }
    }
  }

  return (
    <>
      <Snackbar open={missing} autoHideDuration={6000} onClose={() => setMissing(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={() => setMissing(false)} severity="error" sx={{ width: '100%' }}>
          Please fill all the details
        </Alert>
      </Snackbar>

      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={1} square>
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

            <Typography variant="h3" style={{ fontSie: "30px", fontWeight: "bold", color: "#202920" }} gutterBottom>
              Sign In
            </Typography>

            <Typography style={{ fontSie: "30px", fontWeight: "bold", color: "#202920" }} gutterBottom>
              New User ? {' '}
              <Link href="#" variant="body1" style={{ textDecoration: "none" }}>
                Create  an account
              </Link>{' '}
            </Typography>

            <Box component="form" sx={{ mt: 1 }}>
              {error.userid && <FormHelperText style={{ color: "#ff1100" }}>Please enter UserName or Email</FormHelperText>}
              <TextField required fullWidth size="small" id="username" label="UserName or Email" name="UserName or Email"
                value={data.userid} onChange={(e) => handleChange(e, 'userid')} InputProps={{ style: { marginBottom: "20px" } }} />

              {error.password && <FormHelperText style={{ color: "#ff1100" }}>Please enter password</FormHelperText>}
              <FormControl variant="outlined" required fullWidth size="small" style={{ marginBottom: "20px" }} >
                <InputLabel htmlFor="outlined-adornment-password" >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={data.showPassword ? "text" : "password"}
                  value={data.password}
                  onChange={(e) => handleChange(e, "password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end" >
                        {data.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <Grid container>

                <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "left", alignItems: "flex-start" }}>
                  <FormControlLabel
                    control={<Checkbox color="primary" style={{ display: "flex", justifyContent: "left", alignItems: "flex-start" }} value={data.remember} onChange={(e) => handleChange(e, 'remember')} />}
                    label="Keep me signed in" />
                  {error.remember && <FormHelperText style={{ color: "#ff1100" }}>Please Check this field</FormHelperText>}
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Button onClick={login} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} style={{ backgroundColor: "#202920" }} >
                    Sign In
                  </Button>
                </Grid>

              </Grid>


              <Grid container>
                <Grid item xs={12} md={12} >
                  <h4>Or Sign In With</h4>
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Google Logo" style={{ backgroundColor: "#ffffff", border: "1px solid #202920" }} >
                      <SlSocialGoogle style={{ color: "#202920" }} />
                    </Avatar>

                    <Avatar alt="FaceBook Logo" style={{ backgroundColor: "#ffffff", border: "1px solid #202920" }} >
                      <SlSocialFacebook style={{ color: "#202920" }} />
                    </Avatar>

                    <Avatar alt="LinkedIn Logo" style={{ backgroundColor: "#ffffff", border: "1px solid #202920" }} >
                      <SlSocialLinkedin style={{ color: "#202920" }} />
                    </Avatar>

                    <Avatar alt="Twitter Logo" style={{ backgroundColor: "#ffffff", border: "1px solid #202920" }} >
                      <SlSocialTwitter style={{ color: "#202920" }} />
                    </Avatar>
                  </Stack>
                </Grid>

              </Grid>

            </Box>
          </Box>
        </Grid>

        <Grid item xs={false} sm={4} md={7}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: `url(${Logo})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} />
      </Grid>

      <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={() => setOpensnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleClosesnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
          Saved Successfully
        </Alert>
      </Snackbar>

    </>
  );
}