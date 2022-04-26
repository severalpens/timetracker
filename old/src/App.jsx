import { Outlet } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Navbar from './components/Navbar';
import './App.scss';
import React, { useState, useEffect } from 'react';
import { current } from '@reduxjs/toolkit';

function App() {
  const [currentContract, setCurrentContract] = React.useState(0);

  useEffect(() => {
    if(!currentContract){
      try {
        setCurrentContract(JSON.parse(window.localStorage.contract));
      }
      catch {
      }
    }




  }, []);


  return (
    <>
      <Navbar currentContract={currentContract} />
      <Outlet context={[currentContract, setCurrentContract]} />
    </>
  )
}


export default withAuthenticator(App);

