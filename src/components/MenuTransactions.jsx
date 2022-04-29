import { Link } from 'react-router-dom'

export default function MenuTransactions() {
    return (
        <div className="ml-16 my-16 ">
            <div>
                <h2 className="font-medium leading-tight text-4xl mt-0 mb-8 text-blue-600">Transactions</h2>
                <div>
                    <Link to="/transactions/initialize">Initialize</Link>
                </div>
                <div>
                    <Link to="/transactions/approve">Approve</Link>
                </div>
                <div>
                    <Link to="/transactions/exit">Exit Transaction</Link>
                </div>
                <div>
                    <Link to="/transactions/reclaim">Reclaim Transaction</Link>
                </div>
                <div>
                    <Link to="/transactions/update">Update</Link>
                </div>
                <div>
                    <Link to="/transactions/add">Add</Link>
                </div>
                <div>
                    <Link to="/transactions/entry">Entry Transaction</Link>
                </div>
            </div>
        </div>
    )
}
