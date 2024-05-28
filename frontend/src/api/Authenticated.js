
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function Authenticated({children}) {

    const currentUser = useSelector((state) => state.isAnonymous.userExist);

    if(!currentUser){
        return <Navigate to='/register' />
    }
   
  return <>
    {children}
  </>
}

export default Authenticated