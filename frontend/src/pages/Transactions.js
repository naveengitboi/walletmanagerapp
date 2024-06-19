import React, { useEffect, useState } from 'react'
import TransactionItem from '../components/TransactionItem'
import '../pagesCss/Transactions.css'
import { AiOutlineCloudDownload } from "react-icons/ai";
import api from '../api/axios';
import { useDispatch, useSelector } from "react-redux";
import { addCreditAmount, addDebitAmount, addTransactions } from "../Redux/TransactionSlice.js";
function Transactions() {
    const dispatch = useDispatch()
    const amountSelector = useSelector((state) => state.transaction)



    const [transactions, setTransactions] = useState([]);
    const [deleteFunc, setDeleteFunc] = useState(true)
    
    useEffect(() => {
        const getAllTransactions = async () => {
            let allTransactions = await api.get('/transaction/history', {
                withCredentials: true
            })

            let history = allTransactions.data.output.history
            let amounts = allTransactions.data.output.amounts;
            let recentHistory = []

            if (history.length < 4) {
                recentHistory = history.slice()
            }else{
                recentHistory = history.slice(0,4)
            }
            dispatch(addCreditAmount(amounts.credit))
            dispatch(addDebitAmount(amounts.debit))
            dispatch(addTransactions([...recentHistory]))
            setTransactions(history);
        }
        getAllTransactions()

        return () => {}
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
                    <p className='pLarge darkGreen'>{amountSelector.creditAmount}/-</p>
                    <p className='pLarge darkRed'>{amountSelector.debitAmount}/-</p>
                    <p className='pLarge darkGray'>{amountSelector.creditAmount + amountSelector.debitAmount}/-</p>
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
                    transactions.length ? transactions.map((transaction) => {
                        return <TransactionItem key={transaction._id} transaction={transaction} itemDeleteHanlder={itemDeleteHanlder} />
                    }): <p className='noTransText pLarge' style={{'textAlign':'center', 'padding':'2rem 0'}} >No Transactions</p>
                }
            </div>
        </div>
    )
}

export default Transactions