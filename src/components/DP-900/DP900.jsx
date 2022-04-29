import React from 'react'

export default function DP900() {
  return (
    <div>
       <h1>Online Transactional Processing</h1>
       <h4>Principles of good OLTP Database- ACID Semantics</h4>
       <ul>
        <li>Atomicity - if DR fails then CR must fail</li>
        <li>Consistency - Both DR and CR accounts must balance</li>
        <li>Isolation - Balance retreival query must happen after both accounts balance change is completed</li>
        <li>Durability - If system is switched off, balances aren't lost.</li>

       </ul>
    </div>
  )
}
