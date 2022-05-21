import Page from './page/Page';
import Timer from './timer/Timer'
import {  useState } from 'react';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';


 function TimerWrapper() {
    return (
      <Timer  cType={"task"} pType={"project"}/>
    )
}

export default withAuthenticator(TimerWrapper)
