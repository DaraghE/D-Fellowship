import { useState } from 'react'

// import "./amplifyconfiguration";
// import { Amplify } from "aws-amplify";
// import * as awsExports from "./aws-exports.js";
// Amplify.configure(awsExports.default);

import './CSS/App.css'

import { useAuth } from "react-oidc-context";

// import { UserIn, Waiting } from './Content';
// import FetchData  from './Functions/FetchData';

export default function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "5q3bmulc63f80neg1ecfse6hgp";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://ap-southeast-2s36vowm9v.auth.ap-southeast-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };
  
  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }


  if (auth.isAuthenticated) {
    console.log("User");
    console.log(auth.user.profile);
  }
  
  return (
    <div>
        {/* <FetchData/> */}
        <div className='content'>
        {
          auth.isAuthenticated ? 
            <div>
              <div> Hello: {auth.user?.profile["cognito:username"]} </div>
              <div> Email: {auth.user?.profile.email} </div>
              {/* <div> ID Token: {auth.user?.id_token} </div> 
              <div> Access Token: {auth.user?.access_token} </div>
              <div> Refresh Token: {auth.user?.refresh_token} </div> */}
            </div>
          :
            <h3>Waiting for sign in</h3>
        }
      </div>

      <div className='sign_in_out'>
        { 
          auth.isAuthenticated ? 
            <button onClick={() => signOutRedirect()}>Sign out</button> 
          : 
            <button onClick={() => auth.signinRedirect()}>Sign in</button>
        }        
      </div>
    </div>
  );  
}

