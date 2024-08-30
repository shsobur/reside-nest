import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";
import auth from "../FirebaseConfig/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)
  console.log(user);

  const googleProvider = new GoogleAuthProvider();

  const singUpUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const singInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSingIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(true);
    })
    return () => {
      return unSubscribe();
    }
  }, [])

  const logOut = () => {
    return signOut(auth)
  }

  const authInfo = {
    user,
    singUpUser,
    singInUser,
    googleSingIn,
    loading,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}  
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
}

export default AuthProvider;