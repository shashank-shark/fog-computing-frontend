/* eslint-disable no-unused-vars */
import auth0 from 'auth0-js';

import history from './history';

export default class Auth {
    auth0 = new auth0.WebAuth ({
        domain: 'dev-u0mcqthi.auth0.com',
        clientID: 'QEJrMjLMqkyMtN4pBtaqV3vWROJ5VOl6',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid profile email'
    });

    login = () => {
        this.auth0.authorize();
    }

    handleAuth = () => {
        this.auth0.parseHash( (err, authResult) => {

            if (authResult) {
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('id_token', authResult.id_token);

                // we will increase the exp time of token here
                let expiresAt = JSON.stringify ((authResult.expiresIn * 1000 + new Date().getTime()));
                localStorage.setItem('expiresAt', expiresAt);
                
                // auth check for a time of 200 milliseconds

                setTimeout( () => { 
                    history.replace("/authcheck");
                }, 200);

            } else {
                console.log(err);
            }

        })
    }

    logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expiresAt');
        this.auth0.logout();
    }

    isAuthenticated = () => {
        
        let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
        return new Date().getTime() < expiresAt;
    }
}

