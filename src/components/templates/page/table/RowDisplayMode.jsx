import { API } from 'aws-amplify';
import * as mutations from '../../../../graphql/mutations';
import { Authenticator } from '@aws-amplify/ui-react';

const RowDisplayMode = ({ component, setInEditMode, setComponents }) => {

  const deleteBtnClickHandler = async (e) => {
    const input = {
      id: component.id,
      _version: component._version
  }
    await API.graphql({
      query: mutations.deleteComponent,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
  })
  }

  return (
    <Authenticator>
    <tr key={component.id}>
      <td className="flex justify-between px-6 whitespace-nowrap w-82">
        <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{component.parentId}</div>
        <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{component.name}</div>
        <div className="flex">
          <button onClick={setInEditMode} className="border m-4  px-6 py-2.5 border-black rounded-md">Edit</button>
          <button onClick={deleteBtnClickHandler} className="border m-4  px-6 py-2.5 border-black rounded-md">Delete</button>
        </div>
      </td>
    </tr>
    </Authenticator>
  )
}

export default RowDisplayMode;