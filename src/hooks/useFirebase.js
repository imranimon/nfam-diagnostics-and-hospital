import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error] = useState('')
    const [isLoading, setIsLoading] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);

    }

    //Observe whether user auth state has changed or not
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(false)
        return signOut(auth)
    }


    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;