import React from 'react'
import '../componentStyles/TransactionItem.css'
function TransactionItem() {
    return (
        <>
            
            <div className='tsItem'>
                <div className="userProfile">
                    <img src="/profile.png" alt="user profile" />
                </div>
                <p className='pMedium'>Naveen</p>
                <p className='pMedium'>Received</p>
                <p className='pMedium'>12/02/24</p>
                <p className='pMedium'>Paytm</p>
                <p className='pMedium'>550</p>
                <button className='actionBtn defaultBtn'>Remove</button>
            </div>
        </>
    )
}

export default TransactionItem