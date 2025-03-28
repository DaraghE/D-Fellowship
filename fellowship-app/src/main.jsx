import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";

import { AuthProvider } from "react-oidc-context";

// import { Amplify } from "aws-amplify";
// import * as awsExports from "./aws-exports.js";
// Amplify.configure(awsExports.default);

import './CSS/index.css'
import App from './App.jsx'


const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_s36VOwm9v",
  client_id: "5q3bmulc63f80neg1ecfse6hgp",
  redirect_uri: "https://main.d3ttt6d65nqw1n.amplifyapp.com/",
  response_type: "code",
  scope: "email openid phone",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      {/* {console.log("AWS Exports:", awsExports)} */}
      <App />
    </AuthProvider>
  </StrictMode>,
)
