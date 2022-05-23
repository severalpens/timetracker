import Page from './page/Page';
import { Authenticator } from '@aws-amplify/ui-react';



  function Tasks() {
    return (
      <Authenticator>
        <Page  cType={"task"} pType={"project"}/>
      </Authenticator>
    )
}

export default Tasks