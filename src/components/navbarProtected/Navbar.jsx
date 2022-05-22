import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

function Navbar(props) {
  let navigate = useNavigate();
  let location = useLocation();


  const { signOut, user } = props;

  const signoutWrapper = (e) => {
    signOut(e);
    navigate('/');
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
        <button onClick={signoutWrapper}>Sign out</button>
      </div>
      <div id="navbar-auth-menu" className="p-6 columns-2">
      </div>
    </div>
  );
}

export default withAuthenticator(Navbar);