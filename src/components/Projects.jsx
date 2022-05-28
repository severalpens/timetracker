import Page from './page/Page';
import {  Authenticator } from '@aws-amplify/ui-react';
import FormPage from './formPage/FormPage';

 function Projects() {
   
    return (
      <Authenticator>
        <Page  cType={"project"} pType={"app"}/>
      </Authenticator>
    )
}


export default Projects

