import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { NavLink } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";


export const useSignOut = async() =>{
    const navigate = useNavigate();
    try {
        navigate('/');
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  
    function getUser() {
      return Auth.currentAuthenticatedUser()
        .then(userData => userData)
        .catch(() => console.log('Not signed in'));
    }

export async function signUp(props:any) {
    let {username, password, email} = props;
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}


export async function confirmSignUp(props:any) {
    let {username, code} = props;
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}



export async function signIn(props:any) {
    let {username, password} = props;
    
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}


export async function resendConfirmationCode(props:any) {
    let {username} = props;

    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}


export async function signOut2(props:any) {

    try {
        //await Auth.signOut();
        await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
