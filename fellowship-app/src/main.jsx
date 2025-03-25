import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import awsExports from "./aws-exports";
import Amplify from "aws-amplify";

Amplify.configure(awsExports);

import './CSS/index.css'
import App from './App.jsx'

import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_s36VOwm9v",
  client_id: "5q3bmulc63f80neg1ecfse6hgp",
  redirect_uri: "https://main.d3ttt6d65nqw1n.amplifyapp.com/",
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
