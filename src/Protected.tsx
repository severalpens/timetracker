import { withAuthenticator } from '@aws-amplify/ui-react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbarProtected/Navbar';

const App:any = () => {
  return (
    <>
   <Navbar/>
   <Outlet/>
    </>
  );
}




export default withAuthenticator(App);