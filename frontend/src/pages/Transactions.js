import React, { useEffect, useState } from 'react'
import TransactionItem from '../components/TransactionItem'
import '../pagesCss/Transactions.css'
import { AiOutlineCloudDownload } from "react-icons/ai";
import axios from 'axios';
function Transactions() {

    const getAllTransactions = async () => {
        const allTransactions = await axios.get('/history')

        return allTransactions;
    }

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const history = getAllTransactions()
        setTransactions(history);
    }, [])

    return (
        <div className='tsPageContainer'>
            <div className='tsPageHeader'>
                <div className="totalValues">
                    <p className='pLarge darkGreen'>70,000/-</p>
                    <p className='pLarge darkRed'>20,000/-</p>
                    <p className='pLarge darkGray'>90,000/-</p>
                </div>

                <div className="downLoadBtn">
                    <button className='defaultBtn buttonWithIcon addHoverEffect'>Download<AiOutlineCloudDownload /></button>
                </div>
            </div>
            <div className="itemsCollectionSection">
                <div className="tsItemsHeader">
                    <p className='pSmall'>Profile</p>
                    <p className='pSmall'>from</p>
                    <p className='pSmall'>type</p>
                    <p className='pSmall'>Date</p>
                    <p className='pSmall'>Through</p>
                    <p className='pSmall'>Amount</p>
                    <p className='pSmall'>Action</p>
                </div>
                {
                    transactions.map((transaction) => {
                        return <TransactionItem key={transaction._id} transaction={transaction} />
                    })
                }
            </div>
        </div>
    )
}

export default Transactions