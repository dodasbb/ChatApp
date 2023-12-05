import React from "react";
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Authentication = (params) => {
  const { setAuth } = params;

  const GoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("authentication-token", result.user.refreshToken);
      setAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <p>Sign in with Google</p>
      <button onClick={GoogleSignIn}>Sign In</button>
    </div>
  );
};

export default Authentication
