import React from "react";
import { auth, providerMS } from "../firebase_config";
import { signInWithPopup,getAuth } from "firebase/auth";
import { useState,useEffect } from 'react';
import SearchAppBar from './HomeAppBar'
import Mapp from '../Map';
import { OAuthProvider,GoogleAuthProvider} from "firebase/auth";
import Footer from "./Footer";

function signInWithMS(setIsAuth){
 
  
  //let navigate = useNavigate();

  /**
   * const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
   */
  console.log('signing in with MS')
  providerMS.setCustomParameters({
    // Force re-consent.
    prompt: 'consent',
    // Target specific email with login hint.
    login_hint: 'user@firstadd.onmicrosoft.com',
    tenant: '92454335-564e-4ccf-b0b0-24445b8c03f7'
  });

  




  const auth = getAuth();
  signInWithPopup(auth, providerMS)
  .then((result) => {
    // User is signed in.
    // IdP data available in result.additionalUserInfo.profile.

    // Get the OAuth access token and ID Token
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
    localStorage.setItem({"isAuth":true});
    setIsAuth(true)
  })
  .catch((error) => {
    // Handle error.
  });

}


function LoginMS({isAuth,setIsAuth}) {
  //const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const setTrue = () =>{
    setIsAuth(true);
  }

  const setFalse = () =>{
    setIsAuth(false);
  }
  return (
    <div>
    
    {!isAuth ? (
      <>
      <SearchAppBar/> 
        <Mapp />
        </>
    ) : (
      <div className="loginPage">
          <p>Sign In Wit5h MS to Continue</p>
          <button className="login-with-google-btn" onClick={signInWithMS(setIsAuth)}>
            Sign in with MS
          </button>
    </div>
    )}
 
  </div>
    
  );
}

export default LoginMS;