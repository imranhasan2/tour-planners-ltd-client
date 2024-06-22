import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import usePublicAxios from "../Hooks/usePublic/usePublicAxios";


export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loader, setLoading] = useState(true)

    const axiosPublic =usePublicAxios()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)


    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };




    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
              if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false);
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        });

        return () => unsubscribe();
    }, [axiosPublic]);



    const userInfo = {
        user,
        loader,
        createUser,
        login,
        logOut,googleSignIn

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;