import React from 'react'
import HistoryItem from './HistoryItem'
import '../componentStyles/TransactionItem.css'
function RecentHistory() {
    return (
        <div className='page recentHistoryContainer glassBg'>
            <p className='tinyText addingDotAnimation'>Recent Transactions History <div className='dotAnimateIcon'></div></p>
            <div className="tsItemsHeader">
                <p className='tinyText'>Profile</p>
                <p className='tinyText'>from</p>
                <p className='tinyText'>type</p>
                <p className='tinyText'>Date</p>
                <p className='tinyText'>Through</p>
                <p className='tinyText'>Amount</p>
            </div>
            <HistoryItem />


        </div>
    )
}

export default RecentHistory