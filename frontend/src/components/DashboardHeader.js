import React from 'react'
import '../componentStyles/DashboardHeader.css'
function DashboardHeader() {
    return (
        <div className='glassBg infoContainer'>
            <p className='topHeadings'>Remaining</p>
            <div className="moneyInfo">
                <h1 className='hLarge'>$2000</h1>
                <div className="bottomHeader">
                    <p className='pSmall'>Usage Rate</p>
                    <p className='pSmall'>+200</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader