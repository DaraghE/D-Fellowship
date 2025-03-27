import { useState } from 'react'

// import "./amplifyconfiguration";
// import { Amplify } from "aws-amplify";
// import * as awsExports from "./aws-exports.js";
// Amplify.configure(awsExports.default);

import './CSS/App.css'

import { useAuth } from "react-oidc-context";

import { UserIn, Waiting } from './Content';
import FetchData  from './Functions/FetchData';

export default function App() {
  const auth = useAuth();
  
  const signOutRedirect = () => {
    const clientId = "5q3bmulc63f80neg1ecfse6hgp";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://<user pool domain>";
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
    console.log(auth.user);
  
  
      <div>
        {content(auth)}
      </div>  
  }  
  
  
  return (
    <>
      <FetchData/>



      <br/>
      
      <div>
        <div className='sign_in_out'>
          { 
            auth.isAuthenticated ? 
              <button onClick={() => signOutRedirect()}>Sign out</button> 
              : 
              <button onClick={() => auth.signinRedirect()}>Sign in</button>
          }
        </div> 
      </div>
    </>
  );  
  
}

function content(auth) {
  return (
    <div>

      <div>
        {
          auth.isAuthenticated ? 
            <>
              <pre> Hello: {auth.user?.profile.email} </pre>
              <pre> ID Token: {auth.user?.id_token} </pre> 
              <pre> Access Token: {auth.user?.access_token} </pre>
              <pre> Refresh Token: {auth.user?.refresh_token} </pre>
            
              <UserIn/>
            </>
          :
            <Waiting/>
        }
      </div>
    </div>
  )

}

