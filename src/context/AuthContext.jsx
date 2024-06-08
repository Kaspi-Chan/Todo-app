import React, { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const UserAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const logOut = () => {
    signOut(auth);
    setUser(null)
    setTimeout(() => {
      window.alert('Logged out successfully!')
    }, 500)
  }

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscibe();
  }, [])

  const value = {googleSignIn, logOut, user}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
