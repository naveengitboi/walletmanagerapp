import React from 'react'
import DashboardHeader from '../components/DashboardHeader'
import { Link } from 'react-router-dom'
import '../pagesCss/Dashboard.css'
import AddMoneyType from '../components/AddMoneyType'
import Analytics from '../components/Analytics'

function Dashboard() {
  return (
    <div className='page'>
      <div className="dashboardHeader">
        <DashboardHeader />
        <DashboardHeader />
        <DashboardHeader />
        <DashboardHeader />
      </div>

      <div className="dashboardFooter">
        <div className="dbfLeft">
          <div className="addMoneyContainer">
            <div className="amcNavbar">
              <Link to='/transaction/received'>Received</Link>
              <Link to='/transaction/paid'>Paid</Link>
              <Link to='/transaction/paid'>Debt</Link>
            </div>
            <AddMoneyType />

          </div>

          <div className="transactionsHistoryContainer">

          </div>
        </div>


        <div className='analyticsContainer'>
          <Analytics/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard