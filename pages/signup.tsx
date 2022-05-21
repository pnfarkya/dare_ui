import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Typography, Select, InputLabel, MenuItem, OutlinedInput, ListItemText, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Sign } from 'crypto';
import { createUserProfile } from '../src/Components/repository/userRepo'

const theme = createTheme();
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};
const categories = [
    'Art', 'Song', 'Commercial', 'Social'
];
class SignUp extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            mobNumber: "",
            intrestedCategories: [],
            country: "",
            companyName: "",
            showSucess: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCat = this.handleCat.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const request = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            mobNumber: this.state.mobNumber,
            intrestedCategories: this.state.intrestedCategories,
            country: this.state.country,
        }

        // await createUserProfile(request);
        this.setState({ showSuccess: true })
    };

    handleCat(value) {
        this.setState({ intrestedCategories: value.target.value });
    };
    handleClose(value) {
        this.setState({ showSucess: false });
        window.location.href = "/userProfile";
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
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
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        value={this.state.firstName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        value={this.state.lastName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Country" autoComplete='given-name' required fullWidth value={this.state.country} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Mobile Number" autoComplete='given-name' required fullWidth type="number" value={this.state.mobNumber} />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel id="Preferred Categories">Preferred Categories</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple fullWidth
                                        value={this.state.intrestedCategories}
                                        onChange={this.handleCat}
                                        input={<OutlinedInput label="Categories" />}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        {categories.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={this.state.intrestedCategories.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={this.state.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        value={this.state.password}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Dialog
                        open={this.state.showSuccess}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Welcome"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Thank you!
                                Thanks for signing up. Welcome to DARE. We are happy to have you on board.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose}>Ok</Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            </ThemeProvider>
        );
    }
}

export default SignUp;
