import React, { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const UserAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log(currentUser)
    })
    return () => unsubscibe();
  }, [])

  const value = {googleSignIn, logOut, user}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
