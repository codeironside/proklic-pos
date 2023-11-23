import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Redirect, useNavigate, Navigate } from "react-router-dom";
import SuperAdminLayouts from "./Layouts/SuperAdminLayouts";
import swal from "sweetalert";
import ReactLoading from "react-loading";

// import "./App.css"
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

function AdminPrivateRoute({ ...rest }) {


    const navigate = useNavigate ();
    const [Loading, setLoading] = useState(true);
    const [Authenticated, setAuthenticated] = useState(false);

    const whenComponentIsCalled = async () => {
        axios.get("/api/checkingAuthenticated").then((res) => {
          if(res.status === 200)
          {
              setAuthenticated(true);
          }

          setLoading (false)
      });
      return () => {
          setAuthenticated(false);
      };
    }
    
    
useEffect(() => {
    whenComponentIsCalled();
  }, []);

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    if(err.response.status === 401)
    {
        swal("Unauthorized",err.response.data.message,"warning");
        navigate("/not-found'")
        // navigate('/403');
    }
    return Promise.reject(err);
});
 
axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if(error.response.status === 403) // Access Denied
        {
            swal("Forbidden",error.response.data.message,"warning");
            navigate('/not-found');
        }
        else if(error.response.status === 404) //Page Not Found
        {
            swal("404 Error","Url/Page Not Found","warning");
            navigate('/not-found');
        }
        return Promise.reject(error);
    }
);

  if(Loading)
  {
    return  <div className="ReactLoadingCenter"  align="center">
      <ReactLoading type={"spin"} color={"white"} height={80} width={80}  />
    </div>
  }

  return (
    <Route
      {...rest}
      render={({ props, location }) =>
      Authenticated ? (
          <SuperAdminLayouts {...props} />
        ) : (
            <Route
            path="*"
            element={<Navigate to="/login" replace />}
            />

          // <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default AdminPrivateRoute;
