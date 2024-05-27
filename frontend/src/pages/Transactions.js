import React, { useEffect, useState } from 'react'
import TransactionItem from '../components/TransactionItem'
import '../pagesCss/Transactions.css'
import { AiOutlineCloudDownload } from "react-icons/ai";
import api from '../api/axios';
function Transactions() {

    const getAllTransactions = async () => {
        let allTransactions = await api.get('/transaction/history', {
            withCredentials: true
        })
        allTransactions = allTransactions.data.output
        setTransactions(allTransactions);
    }

    const [transactions, setTransactions] = useState([]);
    const [deleteFunc, setDeleteFunc] = useState(true)
    useEffect(() => {
        getAllTransactions()
    }, [deleteFunc])

    const itemDeleteHanlder = async (e, historyItemId) => {
        console.log(historyItemId)
        await api.delete(`/transaction/delete/${historyItemId}`, {
            withCredentials: true
        })
        setDeleteFunc(prev => !prev)
    }


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
                    <p className='pSmall fromToHeader'>from/To</p>
                    <p className='pSmall descriptionHeader'>description</p>
                    <p className='pSmall'>type</p>
                    <p className='pSmall'>Date</p>
                    <p className='pSmall'>Through</p>
                    <p className='pSmall'>Amount</p>
                    <p className='pSmall'>Action</p>
                </div>

                {
                    transactions.map((transaction) => {
                        return <TransactionItem key={transaction._id} transaction={transaction} itemDeleteHanlder={itemDeleteHanlder} />
                    })
                }
            </div>
        </div>
    )
}

export default Transactions