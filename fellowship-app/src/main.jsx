import React from "react";
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import App from './App.jsx'

// import { Amplify } from 'aws-amplify';
// import outputs from '../amplify_outputs.json';

// Amplify.configure(outputs);

// import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_XlQeZwsNg",
  client_id: "18q8itbgqrf1aa0itru44co6d6",
  redirect_uri: "https://main.dsj2oadeoypam.amplifyapp.com/",
  response_type: "code",
  scope: "email openid phone",
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
