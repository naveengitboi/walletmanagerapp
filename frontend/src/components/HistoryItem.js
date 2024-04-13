import React from 'react'
import '../componentStyles/TransactionItem.css'
function HistoryItem() {
    return (
        <div className='historyItem'>
            <div className='tsItem'>
                <div className="userProfile">
                    <img src="/profile.png" alt="user profile" />
                </div>
                <p className='pSmall'>Naveen</p>
                <p className='pSmall'>Received</p>
                <p className='pSmall'>12/02/24</p>
                <p className='pSmall'>Paytm</p>
                <p className='pSmall'>550</p>
            </div>
        </div>
    )
}

export default HistoryItem