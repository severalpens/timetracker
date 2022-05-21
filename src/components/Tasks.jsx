import Page from './page/Page';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';



  function Projects() {
    return (
      <Page  cType={"task"} pType={"project"}/>
    )
}

export default withAuthenticator(Projects)