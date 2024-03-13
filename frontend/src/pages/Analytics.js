import React from 'react'
import Charts from '../components/Charts'
import '../pagesCss/Analytics.css'
import TransactionItem from '../components/TransactionItem'
function Analytics() {
    return (
        <div className='page analyticContainer'>
            <div className='chartContainer'>
                <div className="splineChart"></div>
                <div className="pieChart"></div>
            </div>

            <div className="historySection">
                <TransactionItem />
            </div>

        </div>
    )
}

export default Analytics