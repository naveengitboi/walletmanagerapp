import React from 'react'
import HistoryItem from './HistoryItem'
import '../componentStyles/TransactionItem.css'
import {useSelector} from 'react-redux'

function RecentHistory() {

    const recentHistory = useSelector((state) => state.transaction)
    console.log(recentHistory)
    return (
        <div className='page recentHistoryContainer'>
            <p className='tinyText addingDotAnimation'>Recent Transactions History <div className='dotAnimateIcon'></div></p>
            <div className="tsItemsHeader">
                <p className='tinyText'>Profile</p>
                <p className='tinyText'>from</p>
                <p className='tinyText'>type</p>
                <p className='tinyText'>Date</p>
                <p className='tinyText'>Through</p>
                <p className='tinyText'>Amount</p>
            </div>
            
            {
                recentHistory.transactions.map((transaction) => {
                    return <HistoryItem key={transaction._id} transaction={transaction} />
                })
            }


        </div>
    )
}

export default RecentHistory