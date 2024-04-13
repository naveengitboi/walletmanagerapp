import React, { useEffect } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import { Link, Outlet } from 'react-router-dom'
import '../pagesCss/Dashboard.css'
import AddMoneyType from '../components/AddMoneyType'
import Analytics from '../components/Analytics'
import RecentHistory from '../components/RecentHistory'

// import api from '../api/axios'

function Dashboard() {

  useEffect(() => {
    // const currentUser = api.get('/user/:')
  }, [])

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
              <Link to='/received'>Received</Link>
              <Link to='/paid'>Paid</Link>
              <Link to='/paid'>Debt</Link>
            </div>
            <Outlet />

          </div>

          <div className="transactionsHistoryContainer">
            <RecentHistory />
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