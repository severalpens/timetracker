import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { NavLink } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";


function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function signOut() {
    try {
      navigate('/');
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
        default:
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }



  if (!user) {
    return (
      <div id="navbar" className="border border-black  flex justify-between  m-4  px-4  rounded-lg mx-10">
        <div id="navbar-main-menu" className="columns-2 p-6 flex">
          <NavLink id="navlink-home" className="font-bold p-6 navlink" to="/">
            Time Tracker
          </NavLink>
          <NavLink id="navlink-projects" className="p-6" to="/projects">
            Login
          </NavLink>
        </div>
        <div id="navbar-auth-menu" className="p-6 columns-2">
        </div>
      </div>
    );
  }
  return (
    <div id="navbar" className="border border-black  flex justify-between  m-4  px-4  rounded-lg mx-10">
      <div id="navbar-main-menu" className="columns-2 p-6 flex">
        <NavLink id="navlink-home" className="font-bold p-6 navlink" to="/">
          Time Tracker
        </NavLink>
        <NavLink id="navlink-projects" className="p-6" to="/projects">
          Projects
        </NavLink>
        <NavLink id="navlink-tasks" className="p-6" to="/tasks">
          Tasks
        </NavLink>
        <NavLink id="navlink-entries" className="p-6" to="/timer">
          Timer
        </NavLink>
        <NavLink id="navlink-entries" className="p-6" to="/records">
          Manual Override
        </NavLink>
        <button onClick={(e) => signOut()}>Sign out</button>
      </div>
      <div id="navbar-auth-menu" className="p-6 columns-2">
      </div>
    </div>
  );
}

export default Navbar;