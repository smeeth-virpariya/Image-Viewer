import React, {Component} from 'react';
import {Box, Button, Card, CardContent, FormControl, Input, InputLabel, Typography} from '@material-ui/core';

//Imports Header component to be part of Login page.
import Header from "../../common/header/Header";

//Import of stylesheet for Login page.
import './Login.css'

/**
 * Login component serves as login page.
 */
class Login extends Component {
    render() {
        return <div>
            <div><Header/></div>
            <div className='login-card-flex-container'>
                <Card className='login-card'>
                    <CardContent>
                        <FormControl className='login-form-control'>
                            <Typography variant="h5">
                                <Box fontWeight='fontWeightBold'>
                                    LOGIN
                                </Box>
                            </Typography>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl required className='login-form-control'>
                            <InputLabel htmlFor='username'>Username</InputLabel>
                            <Input id='username' name='username' type='text'/>
                        </FormControl>
                        <br/>
                        <br/>
                        <FormControl required className='login-form-control'>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' name='password' type='password'/>
                        </FormControl>
                        <br/>
                        <br/>
                        <br/>
                        <FormControl>
                            <Button variant='contained' color='primary'>Login</Button>
                        </FormControl>
                    </CardContent>
                </Card>
            </div>
        </div>;
    }
}

export default Login;