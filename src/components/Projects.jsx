import Page from './page/Page';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';


 function Projects() {
    return (
      <Page  cType={"project"} pType={"app"}/>
    )
}


export default withAuthenticator(Projects)