import React from 'react'
import '../componentStyles/AddMoneyType.css'
import Button from '../components/Button'

function AddMoneyType() {
    return (
        <div className='addMoneyTypeContainer glassBg'>
            <div className="amtInputContainer glassBg">
                <p className='pSmall'>
                    $
                </p>
                <input type="text" placeholder='Amount' className='hMedium' />
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
                <input type="text" placeholder='Amount' className='pMedium'  />
            </div>

            <Button color='lightGreen' btnType='Add Amount' />
            <Button color='white' btnType='Reset' />
        </div>
    )
}

export default AddMoneyType