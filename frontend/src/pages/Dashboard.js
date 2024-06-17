import React from 'react'
import DashboardHeader from '../components/DashboardHeader'
import { Link, Outlet } from 'react-router-dom'
import '../pagesCss/Dashboard.css'
import Analytics from '../components/Analytics'
import RecentHistory from '../components/RecentHistory'
import { useSelector } from 'react-redux'




function Dashboard() {
  const amountSelector = useSelector((state) => state.transaction)

  const creditedDetails = {
    amount: amountSelector.creditAmount,
    heading: 'Credited',
    usageRate: '200'
  }
  const debitedDetails = {
    amount: amountSelector.debitAmount,
    heading: 'Debited',
    usageRate: '150'
  }
  const totalAmount = {
    amount: creditedDetails.amount + debitedDetails.amount,
    heading: 'Total Amounts',
    usageRate: '30'
  }
  const investmentsAmounts = {
    amount: 0,
    heading: 'Investments Amounts',
    usageRate: '50'
  }


  return (
    <div className='page'>
      <div className="dashboardHeader">
        <DashboardHeader detail={creditedDetails} />
        <DashboardHeader detail={debitedDetails} />
        <DashboardHeader detail={totalAmount} />
        <DashboardHeader detail={investmentsAmounts} />
      </div>

      <div className="dashboardFooter">
        <div className="dbfLeft">
          <div className="addMoneyContainer">
            <div className="amcNavbar pLarge">
              <Link to='/received' className='addHoverEffect'>Received</Link>
              <Link to='/paid' className='addHoverEffect'>Paid</Link>
              <Link to='/paid' className='addHoverEffect'>Debt</Link>
            </div>
            <Outlet />
          </div>

          <div className='trsHCOuterContainer'>
            <div className="transactionsHistoryContainer">
              <RecentHistory />
            </div>
          </div>
        </div>


        <div className='analyticsContainer'>
          <Analytics />
        </div>
      </div>
    </div>
  )
}

export default Dashboard