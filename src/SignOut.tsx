

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Protected:any = (props:any) => {
  let navigate = useNavigate();
  let location = useLocation();


  const { signOut, user } = props;

  const signoutWrapper = (e:any) => {
    signOut(e);
    navigate('/');
  } 

  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signoutWrapper}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Protected);