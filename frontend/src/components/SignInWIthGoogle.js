import React from "react";
import { MdEast } from "react-icons/md";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import api from "../api/axios";
import { useDispatch } from "react-redux";
import { addUserExist } from "../Redux/IsAnonymous";
import { useNavigate } from "react-router-dom";
function SignInWithGoogle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function googlelogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const creatingUsername = user.email.split("@")[0];
      const userData = {
        email: user.email,
        userName: creatingUsername,
        password: user.uid,
        firstName: user.displayName,
        lastName: user.displayName,
        userProfile: user.photoURL,
      }

      const resp = await api.post('/users/login', userData, {
        withCredentials: true,
        credentials: 'include',
      })
      console.log(resp)

      if (resp && resp.status === 200) {
        dispatch(addUserExist())
        navigate('/');
      }


    }).catch((error) => {
      console.log(error.response);
    }
    );
  }
  return (
    <button className="defaultBtn buttonWithIcon" onClick={googlelogin}>
      Google
      <MdEast />
    </button>
  )
}

export default SignInWithGoogle
