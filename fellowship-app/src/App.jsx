import { useState } from 'react'
import './CSS/App.css'

import ToDo from './ToDo';

import { useAuth } from "react-oidc-context";

export default function App() {
  const auth = useAuth();
  const [count, setCount] = useState(0)

  const signOutRedirect = () => {
    const clientId = "18q8itbgqrf1aa0itru44co6d6";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://ap-southeast-2xlqezwsng.auth.ap-southeast-2.amazoncognito.com";
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
    
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <NewItem/>
        <ItemDisplay/>

        {/* <button onClick={() => auth.removeUser()}>Sign out</button> */}
      </div>
    );
  }

  return (
    <>
      <div className='sign_in_out'>
        <ToDo/>
      </div>
      <br/>
      <div className='sign_in_out'>
        { 
          auth.isAuthenticated ? 
            <button onClick={() => signOutRedirect()}>Sign out</button> 
            : 
            <button onClick={() => auth.signinRedirect()}>Sign in</button>
        }
      </div>    
    </>


  );

}

