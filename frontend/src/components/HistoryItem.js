import React from 'react'
import '../componentStyles/TransactionItem.css'


function HistoryItem({ transaction }) {
    let date = new Date(transaction.transDate)
    date = date.toLocaleDateString('en-GB')
    return (
        <div className='historyItem recentHistoryItem'>
            <div className='tsItem'>
                <div className="userProfile">
                    <img src="/profile.png" alt="user profile" />
                </div>
                <p className='pSmall'>{transaction.transFromTo}</p>
                <p className='pSmall'>{transaction.transType}</p>
                <p className='pSmall'>{date}</p>
                <p className='pSmall'>{transaction.through}</p>
                <p className='pSmall'>{transaction.amount}</p>
            </div>
        </div>
    )
}

export default HistoryItem