import React from 'react'
import '../componentStyles/AddMoneyType.css'

function AddMoneyType() {
    return (
        <div className='addMoneyTypeContainer glassBg'>
            <div className="amtInputContainer glassBg">
                <p className='pSmall'>
                    $
                </p>
                <input type="text" placeholder='Amount' className='pLarge' />
            </div>
            <div className="amtInputContainer glassBg">
                <p className='pSmall'>
                    Type
                </p>
                <input type="text" placeholder='Amount' className='pMedium' />
            </div>
            <div className="amtInputContainer glassBg">
                <p className='pSmall'>
                    $
                </p>
                <input type="text" placeholder='Amount' className='pMedium' />
            </div>
            <div className="amtInputContainer glassBg">
                <p className='pSmall'>
                    $
                </p>
                <input type="text" placeholder='Amount' className='pMedium' />
            </div>

            <button className='lightGreenBg defaultBtn'>Add Amount</button>
            <button className='defaultBtn darkRed'>Reset</button>


        </div>
    )
}

export default AddMoneyType