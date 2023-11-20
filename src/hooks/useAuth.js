import { useContext } from "react";
import AuthContext2 from "../context/AuthContext2";

const useAuth = () => {
    return useContext(AuthContext2);
}

export default useAuth;