import {Link} from 'react-router-dom'
import { MdFingerprint, MdPassword, MdAccountTree, MdBugReport, MdDelete, MdCode } from "react-icons/md";
import '../pagesCss/Settings.css'
import api from '../api/axios';
import { useDispatch } from 'react-redux';
import { removeUserExist } from '../Redux/IsAnonymous'


const Settings = ()=> {
  const dispatch = useDispatch()

  const deleteAccountHandler = async () => {

    const confirmDelete = window.confirm('Are you sure you want to delete your account?')
    if(confirmDelete){
        try {
          const logOutFunc = async () => {
            await api.get('/users/logout', {
              withCredentials: true,
            })
            dispatch(removeUserExist());
          }
          logOutFunc()
          const resp = await api.delete('/users/remove', {
            withCredentials: true,
            credentials: 'include',
          })
          console.log(resp)

        } catch (error) {
          console.log(error)
        }
    }

  }



  return (
    <div className='page settingsContainer'>
      <div className="updateBtnsContainer settingsOptionsTop">
        <div className="updateBtn">
          <Link to='/profile/passwords'><button className='defaultBtn buttonWithIcon'>Passwords <MdPassword/> </button></Link>
        </div>
        <div className="updateBtn">
          <Link to='/profile/2fa'><button className='defaultBtn buttonWithIcon'>2-Fa Authentication <MdFingerprint/> </button></Link>
        </div>
        <div className="updateBtn">
          <Link><button className='defaultBtn buttonWithIcon'>Accounts <MdAccountTree/>  </button></Link>
        </div>
      </div>

      <div className="updateBtnsContainer settingsOptionsTop">
        
        <div className="updateBtn">
          <a href='https://github.com/naveengitboi/walletmanagerapp' target='_blank' rel="noreferrer"><button className='defaultBtn buttonWithIcon'>Contribute/Report Code <MdCode /> </button></a>
        </div>
        <div className="updateBtn">
          <Link><button className='defaultBtn buttonWithIcon lightRedBg svgWhite' onClick={deleteAccountHandler}>Delete Account <MdDelete/> </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Settings
