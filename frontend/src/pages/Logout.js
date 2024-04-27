import React, { useEffect } from 'react'
import api from '../api/axios'

function Logout() {

    useEffect(() => {
        const logOutFunc = async () => {
            await api.get('/logout', {
                withCredentials:true,
            })
        }
        
        logOutFunc()
    }, [])

  return (
    <div>Logout successfull</div>
  )
}

export default Logout