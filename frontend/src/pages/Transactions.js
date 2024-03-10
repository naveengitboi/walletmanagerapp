import React from 'react'
import TransactionItem from '../components/TransactionItem'
import '../pagesCss/Transactions.css'
import { AiOutlineCloudDownload } from "react-icons/ai";
function Transactions() {
    return (
        <div className='tsPageContainer'>
            <div className='tsPageHeader'>
                <div className="totalValues">
                    <p className='pLarge darkGreen'>70,000/-</p>
                    <p className='pLarge darkRed'>20,000/-</p>
                    <p className='pLarge darkGray'>90,000/-</p>
                </div>

                <div className="downLoadBtn">
                    <button className='defaultBtn buttonWithIcon'>Download<AiOutlineCloudDownload /></button>
                </div>
            </div>
            <TransactionItem />
        </div>
    )
}

export default Transactions