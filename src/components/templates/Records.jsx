import Page from './page/Page';
import { Authenticator } from '@aws-amplify/ui-react';



  function Records() {
    return (
      <Authenticator>
        <Page  cType={"record"} pType={"task"}/>
      </Authenticator>
    )
}


export default Records