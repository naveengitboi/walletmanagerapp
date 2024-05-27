import React from 'react'
import '../componentStyles/TransactionItem.css'
function TransactionItem({ transaction, itemDeleteHanlder }) {

    let date = new Date(transaction.transDate)
    date = date.toLocaleDateString('en-GB')

    return (
        <>

            <div className='tsItem'>
                <div className="userProfile">
                    <img src="/profile.png" alt="user profile" />
                </div>
                <p className='pMedium fromto'>{transaction.transFromTo}</p>
                <p className='pMedium description'>{transaction.description}</p>
                <p className='pMedium'>{transaction.transType}</p>
                <p className='pMedium'>{date}</p>
                <p className='pMedium'>{transaction.through}</p>
                <p className='pMedium'>{transaction.amount}</p>
                <button className='actionBtn defaultBtn' onClick={(e) => itemDeleteHanlder(e, transaction._id)}>Remove</button>
            </div>
        </>
    )
}

export default TransactionItem