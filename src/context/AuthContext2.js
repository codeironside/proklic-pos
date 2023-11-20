import { createContext, useState } from "react";

const AuthContext2 = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext2.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext2.Provider>
    )
}

export default AuthContext2;