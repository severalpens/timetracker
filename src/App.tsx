/* src/App.js */
import "reflect-metadata";
import Amplify from 'aws-amplify';
import {Outlet} from 'react-router-dom';
import awsExports from "./aws-exports";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Navbar from "./components/navbar/Navbar";

Amplify.configure(awsExports);


const App = () => {
  return (
    <Authenticator>
      <Navbar />
      <Outlet />
    </Authenticator>
  )
}


export default App