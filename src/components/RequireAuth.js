import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  console.log(auth);

  // let contactJSON = auth;
  // let contact = JSON.parse(contactJSON);
  // console.log(contact.id + ", " + contact.level);

  const authID2Number = Number(auth?.id);
  const authID2Array = [authID2Number];
  //   const authID2Number1 = JSON.parse(auth)
  //   const allowedRoles2Numbers = allowedRoles.includes(authID2Number);
  //   console.log(allowedRoles2Numbers);
  console.log(authID2Array + " " + "Roles checking in");
  console.log(allowedRoles + " " + "Roles Permitted");

  return authID2Array?.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : <Navigate to="/*" state={{ from: location }} replace />;

  //   return allowedRoles2Numbers ? (
  //     <Outlet />
  //   ) : (
  //     <Navigate to="*" state={{ from: location }} replace />
  //   );
};

export default RequireAuth;

// import { useContext } from "react";
// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const RequireAuth = ({ allowedRoles }) => {
//     const location = useLocation();
//     const { auth } = useContext(AuthContext);

//     return (
//         auth?.roles?.find(role => allowedRoles?.includes(role))
//             ? <Outlet />
//             : auth?.user
//                 ? <Navigate to="/not-found" state={{ from: location }} replace />
//                 : <Navigate to="/" state={{ from: location }} replace />
//     );
// }

// export default RequireAuth;
