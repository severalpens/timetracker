import Page from './page/Page';
import {  Authenticator } from '@aws-amplify/ui-react';

 function Projects() {
   
    return (
      <Authenticator>
        <Page  cType={"project"} pType={"app"}/>
      </Authenticator>
    )
}


export default Projects

