import React from 'react'
import '../componentStyles/TransactionItem.css'
function TransactionItem({ transaction }) {
    return (
        <>
            
            <div className='tsItem'>
                <div className="userProfile">
                    <img src="/profile.png" alt="user profile" />
                </div>
                <p className='pMedium'>{transaction.transFromTo}</p>
                <p className='pMedium'>{transaction.transType}</p>
                <p className='pMedium'>12/02/24</p>
                <p className='pMedium'>{transaction.through}</p>
                <p className='pMedium'>550</p>
                <button className='actionBtn defaultBtn'>Remove</button>
            </div>
        </>
    )
}

export default TransactionItem