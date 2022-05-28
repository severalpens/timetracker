import Page from './page/Page';
import Timer from './timer/Timer'
import {  useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';


 function TimerWrapper() {
    return (
      <Authenticator>
        <Timer/>
      </Authenticator>
    )
}

export default TimerWrapper
