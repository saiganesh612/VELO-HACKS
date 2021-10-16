import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Paper, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
import { AUTH } from '../../actions/ActionTypes';
import useStyles from './styles';
import axios from "axios"

const Authentication = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        axios.post("/update-user-details", { userObj: res })
            .then(() => {
                dispatch({ type: AUTH, data: { result, token } });
                history.push('/');
            }).catch(err => {
                console.log(err.response)
            })
    };

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper} elevation={3}>
                    <GoogleLogin
                        clientId="1014709244149-3q39c25jugjtj4urcr4rnii7ljb3uku1.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary"
                                fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}
                                startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                </Paper>
            </Container>
        </div>
    )
}

export default Authentication;
