import React from 'react'
import '../componentStyles/DashboardHeader.css'
function DashboardHeader({detail}) {
    return (
        <div className='glassBg infoContainer'>
            <p className='topHeadings'>{detail.heading}</p>
            <div className="moneyInfo">
                <p className="hLarge">{detail.amount}/-</p>
                <div className="bottomHeader">
                    <p className='pSmall'>Usage Rate</p>
                    <p className='pSmall'>+{detail.usageRate}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader