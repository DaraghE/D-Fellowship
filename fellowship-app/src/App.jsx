import { useState } from 'react'
import './CSS/App.css'

import ToDo from './ToDo';

import { useAuth } from "react-oidc-context";

import { UserIn, Waiting } from './Content';

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
  }  
  return (
    <>
      <div>
        {content(auth)}
      </div>

      <br/>
      
      <div>
        {auth_controls(auth)}
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
function auth_controls(auth) {
  return (
    <div className='sign_in_out'>
      { 
        auth.isAuthenticated ? 
          <button onClick={() => signOutRedirect()}>Sign out</button> 
          : 
          <button onClick={() => auth.signinRedirect()}>Sign in</button>
      }
    </div> 
  )  
}