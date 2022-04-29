import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuElements() {
    return (
        <div className="ml-16 my-16 ">
            <div>
                <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Elements</h2>
                <div>
                    <Link to="/elements/contracts">Contracts</Link>
                </div>
                <div>
                    <Link to="/elements/accounts">Accounts</Link>
                </div>
                <div>
                    <Link to="/elements/hashpairs">Hash Pairs</Link>
                </div>
                <div>
                    <Link to="/elements/burnaccounts">Burn Accounts</Link>
                </div>
            </div>
        </div>
    )
}
