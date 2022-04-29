import { useState, useEffect } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const [accounts, setAccounts] = useState(null);
  const [network, setNetwork] = useState(null);
  let contract = [];
  let currentContract = props.currentContract;

  try{
    contract =  JSON.parse(window.localStorage.contract);
  }
  catch{}

  useEffect(() => {
    async function fetchData() {
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="container flex justify-between mx-auto  border m-4 border-black px-4">
        <div className="p-6 columns-2  flex ">
          <div className="p-6 ">
            <NavLink className="font-bold" to="/">
              Time Tracker
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/categories">
              Categories
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/tasks">
              Tasks
            </NavLink>
          </div>
          <div className="p-6">
            <NavLink className="" to="/entries">
              Entries
            </NavLink>
          </div>
        </div>
        <div className="p-6 columns-2">
          <AmplifySignOut />
        </div>
      </div>
      <div className="container flex mx-auto">
        <div className="p-6">
        </div>
        <div className="p-6">
        </div>
        <div className="p-6">
        </div>
      </div>
    </>
       );
}

export default withAuthenticator(Navbar);