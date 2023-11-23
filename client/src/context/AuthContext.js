import { createContext, useEffect, useReducer, useState } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("prolick_user")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    case "LOGOUT_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGOUT_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const [auth, setAuth] = useState();

  // const name = localStorage.getItem('prolick_user');

  useEffect(() => {
    localStorage.setItem("prolick_user", JSON.stringify(state.user));
    setAuth(state.user)
  }, [state.user]);
  
  // console.log(auth)
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
        auth

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
