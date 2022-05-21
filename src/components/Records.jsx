import Page from './page/Page';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';



  function Projects() {
    return (
      <Page  cType={"record"} pType={"task"}/>
    )
}


export default withAuthenticator(Projects)