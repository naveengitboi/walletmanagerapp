import React, { useEffect } from 'react'
import api from '../api/axios'
import { useDispatch } from 'react-redux'
import { removeUserExist } from '../Redux/IsAnonymous'
function Logout() {
  const dispatch = useDispatch()

    useEffect(() => {
        const logOutFunc = async () => {
            await api.get('/logout', {
                withCredentials:true,
            })

            dispatch(removeUserExist()) 
        }
        logOutFunc()
    }, [])

  return (
    <div>Logout successfull</div>
  )
}

export default Logout