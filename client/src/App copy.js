import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Login from "./proklic_pages/login/Login";
import ForgotPass from "./proklic_pages/login/ForgotPassword";
import NotFound from "./proklic_pages/Error/NotFound";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Register from "./proklic_pages/register/Register";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SuperAdminLayouts from "./Layouts/SuperAdminLayouts";

import Team from "./pages/team/TeamIndex";
import Invoices from "./pages/invoices/InvoicesIndex";
import Contacts from "./pages/contacts/ContactsIndex";
import Bar from "./pages/bar/barIndex";
import CreateTeam from "./pages/forms/FormsIndex";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faqs/FaqIndex";
import Geography from "./pages/geography";
import Calendar from "./pages/calender/CalenderIndex";

import DashboardIndex from "./pages/Dashboard/DashboardIndex";
import EventDef from "./proklic_pages/EventDefinations/EventDef";
import EventArea from "./proklic_pages/EventArea/EventArea";
import TaskScheduler from "./proklic_pages/TaskSch/TashScheduler";

import RequireAuth from "./components/RequireAuth";
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";

const ROLES = {
  SuperRole: 90000,
  General_Manager: 90001,
  Manager: 90002,
  Supervisor: 90003,
  Bartender: 90004,
  Server: 90005,
  Host: 90006,
};

function App() {
  const [theme, colorMode] = useMode();

  const { auth } = useContext(AuthContext);
  const CURRENT_ROLE_LOGGED = auth?.id;

  // const AdminRoutes = ({ children }) => {
  //   const location = useLocation();
  //   if (CURRENT_ROLE_LOGGED === 90000) {
  //     return <>{children}</>;
  //   } else {
  //     <Navigate to="*" state={{ from: location }} replace />;
  //   }
  // }

  return (
    <AuthContextProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/dashboard" element={<SuperAdminLayouts />}>
              <Route
                path="/dashboard/dashboardIndex"
                element={<DashboardIndex />}
              />

              {/* <Route
              path="/dashboard/event_def"
              element={
                <AdminRoutes>
                  <EventDef />
                </AdminRoutes>
              }
            /> */}

              {/* FOR ONLY THE SUPER ROLE */}
              <Route element={<RequireAuth allowedRoles={[ROLES.SuperRole]} />}>
                <Route path="/dashboard/event_def" element={<EventDef />} />
                <Route path="/dashboard/event_area" element={<EventArea />} />
                <Route path="/dashboard/tasks" element={<TaskScheduler />} />
                

                <Route path="/dashboard/team" element={<Team />} />
                <Route path="/dashboard/form" element={<CreateTeam />} />
              </Route>

              {/* FOR TOP MANAGERS */}
              <Route
                element={
                  <RequireAuth
                    allowedRoles={[
                      ROLES.SuperRole,
                      ROLES.General_Manager,
                      ROLES.Manager,
                    ]}
                  />
                }
              >
                <Route path="/dashboard/invoices" element={<Invoices />} />
                <Route path="/dashboard/contacts" element={<Contacts />} />
                <Route path="/dashboard/bar" element={<Bar />} />
                <Route path="/dashboard/pie" element={<Pie />} />
                <Route path="/dashboard/line" element={<Line />} />
                <Route path="/dashboard/geography" element={<Geography />} />
              </Route>

              {/* FOR HOST, SERVERS, AND BARTENDERS */}
              <Route
                element={
                  <RequireAuth
                    allowedRoles={[ROLES.Host, ROLES.Server, ROLES.Bartender]}
                  />
                }
              >
                <Route path="/dashboard/invoices" element={<Invoices />} />
                <Route path="/dashboard/contacts" element={<Contacts />} />
              </Route>

              {/* FOR EVERYONE */}
              <Route
                element={
                  <RequireAuth
                    allowedRoles={[
                      ROLES.SuperRole,
                      ROLES.General_Manager,
                      ROLES.Manager,
                      ROLES.Supervisor,
                      ROLES.Host,
                      ROLES.Server,
                      ROLES.Bartender,
                    ]}
                  />
                }
              >
                <Route path="/dashboard/faq" element={<FAQ />} />
                <Route path="/dashboard/calendar" element={<Calendar />} />
              </Route>
            </Route>
          </Routes>

          {/*  */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AuthContextProvider>
  );
}

// function AdminRoutes({ children }) {
//   return <>{children}</>
// }

function AdminRoutes({ children }) {
  const { auth } = useContext(AuthContext);
  const CURRENT_ROLE_LOGGED = Number(auth?.id);
  // console.log(auth.id);
  console.log(CURRENT_ROLE_LOGGED);
  // console.log(ROLES.Server);
  const location = useLocation();

  if (CURRENT_ROLE_LOGGED === ROLES.Server) {
    return <>{children}</>;
  } else {
    <Navigate to="*" state={{ from: location }} replace />;
  }
}

export default App;
