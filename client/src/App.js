import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Login from "./proklic_pages/login/Login";
import ForgotPass from "./proklic_pages/login/ForgotPassword";
import NotFound from "./proklic_pages/Error/NotFound";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Register from "./proklic_pages/register/Register";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SuperAdminLayouts from "./Layouts/SuperAdminLayouts";

import Team from "./proklic_pages/EmployeeCreation/team/TeamIndex";
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
import PropertyDashboard from './pages/Dashboard/PropertyDashboard'
import TaskScheduler from "./proklic_pages/TaskSch/TashScheduler";

import RequireAuth from "./components/RequireAuth";
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import ManageTeam from "./proklic_pages/EmployeeCreation/team/ManageTeam";
import axios from "axios";
import RoleCreation from "./proklic_pages/RolesCreation/RoleCreation";
import EmployeeCreation from "./proklic_pages/EmployeeCreation/EmployeeCreation";
import IndexPage from "./proklic_pages/EmployeeCreation/IndexPage";

// ITEM MASTER
import MenuItemCategory from "./proklic_pages/ItemMaster/MeniItemCategory/IndexPageMICategory";
import MenuItemGroup from "./proklic_pages/ItemMaster/MenuItemGroup/MenuItemGroup";
import MenuItemIndexPage from "./proklic_pages/ItemMaster/MenuItem/IndexPageMenuItem";
import IndexPageMenuItem from "./proklic_pages/ItemMaster/MenuItem/IndexPageMenuItem";
import MenuItemMastersCreate from "./proklic_pages/ItemMaster/MenuItem/MenuItemMastersCreate";
import MenuItemExpositions from "./proklic_pages/ItemMaster/MenuItemExposition/MenuItemExpositions";
import MenuItemPricesTest from "./proklic_pages/ItemMaster/MenuItemPrices/MenuItemPricesTest";
import IndexPageMIGroup from "./proklic_pages/ItemMaster/MenuItemGroup/IndexPageMIGroup";
import Shift from "./proklic_pages/EmployeeCreation/Shift";
import MenuItemSetsTest from "./proklic_pages/ItemMaster/MenuItemSets/MenuItemSetsTest";
import PrintSets from "./proklic_pages/ItemMaster/PrintSets/PrintSets";
import EditMenuItemSets from "./proklic_pages/ItemMaster/MenuItemSets/EditMenuItemSets";
import MenuItemScreenLink from "./proklic_pages/ItemMaster/MenuItemScreenLink/MenuItemScreenLink";
import CondimentGroups from "./proklic_pages/ItemMaster/CondimentGroups/CondimentGroups";
import MenuItemAvailability from "./proklic_pages/ItemMaster/MenuItemAvailability/MenuItemAvailability";
import Barcode from "./proklic_pages/ItemMaster/Barcode/Barcode";
import CondimentSet from "./proklic_pages/ItemMaster/CondimentSet/CondimentSet";
import ComboMeals from "./proklic_pages/ItemMaster/ComboMeals/ComboMeals";
import ComboGroup from "./proklic_pages/ItemMaster/ComboGroup/ComboGroup";

// PROPERTY SETUP
import TaxRate from "./proklic_pages/PropertySetup/TaxRate/TaxRate";
import TaxSets from "./proklic_pages/PropertySetup/TaxSets/TaxSets";
import Currency from "./proklic_pages/PropertySetup/Currency/Currency";
import EventDef from "./proklic_pages/PropertySetup/EventDefinations/EventDef";
import EventArea from "./proklic_pages/PropertySetup/EventArea/EventArea";

import Discount from "./proklic_pages/SalesProperties/Discount/Discount";
import EditDiscount from "./proklic_pages/SalesProperties/Discount/EditDiscount";


const ROLES = {
  SuperRole: 90000,
  General_Manager: 90001,
  Manager: 90002,
  Supervisor: 90003,
  Bartender: 90004,
  Server: 90005,
  Host: 90006,
};

axios.defaults.baseURL = process.env.REACT_BASE_URL;
axios.defaults.withCredentials = true;

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
            <Route index path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />

            <Route path="/dashboard" element={<SuperAdminLayouts />}>
              <Route
                path="/dashboard/dashboardIndex"
                element={<DashboardIndex />}
              />
              <Route
                path="/dashboard/:_id"
                element={<PropertyDashboard />}
              />

              {/* ITEM MENU */}
              <Route path="/dashboard/:_id/menu_items" element={<IndexPageMenuItem />} />
              <Route path="/dashboard/:_id/menu_items_expo" element={<MenuItemExpositions />} />
              <Route path="/dashboard/:_id/menu_items_price" element={<MenuItemPricesTest />} />
              <Route path="/dashboard/:_id/menu_item_group" element={<IndexPageMIGroup />} />
              <Route path="/dashboard/:_id/menu_category" element={<MenuItemCategory />} />
              <Route path="/dashboard/:_id/menu_item_screenlink" element={<MenuItemScreenLink />} />
              <Route path="/dashboard/:_id/condiment_gp" element={<CondimentGroups />} />
              <Route path="/dashboard/:_id/condiment_set" element={<CondimentSet />} />
              <Route path="/dashboard/:_id/combo_gp" element={<ComboGroup />} />
              <Route path="/dashboard/:_id/combo_ml" element={<ComboMeals />} />
              <Route path="/dashboard/:_id/barcode" element={<Barcode />} />
              <Route path="/dashboard/:_id/menu_item_avail" element={<MenuItemAvailability />} />

              <Route path="/dashboard/:_id/menu_items_sets" element={<MenuItemSetsTest />} />
              <Route path="/dashboard/:_id/edit-menuitem-sets/:id" element={<EditMenuItemSets />} />
              <Route path="/dashboard/:_id/print_sets" element={<PrintSets />} />

              <Route path="/dashboard/:_id/tax_sets" element={<TaxSets />} />
              <Route path="/dashboard/:_id/tax_rate" element={<TaxRate />} />
              <Route path="/dashboard/:_id/currency" element={<Currency />} />
              <Route path="/dashboard/:_id/event_def" element={<EventDef />} />
              <Route path="/dashboard/:_id/event_area" element={<EventArea />} />
              <Route path="/dashboard/:_id/tasks" element={<TaskScheduler />} />

              <Route path="/dashboard/:_id/discount" element={<Discount />} />
              <Route path="/dashboard/:_id/edit-discount/:id" element={<EditDiscount />} />

              {/* <Route path="/dashboard/:_id/team" element={<Team />} />
              <Route path="/dashboard/:_id/form" element={<CreateTeam />} /> */}

              <Route path="/dashboard/:_id/team" element={<Team />} />
              <Route path="/dashboard/:_id/create-role" element={<RoleCreation />} />

              <Route path="/dashboard/:_id/invoices" element={<Invoices />} />
              <Route path="/dashboard/:_id/contacts" element={<Contacts />} />
              <Route path="/dashboard/:_id/bar" element={<Bar />} />
              <Route path="/dashboard/:_id/pie" element={<Pie />} />
              <Route path="/dashboard/:_id/line" element={<Line />} />
              <Route path="/dashboard/:_id/geography" element={<Geography />} />

              <Route path="/dashboard/:_id/invoices" element={<Invoices />} />
              <Route path="/dashboard/:_id/contacts" element={<Contacts />} />

              <Route path="/dashboard/:_id/faq" element={<FAQ />} />
              <Route path="/dashboard/:_id/calendar" element={<Calendar />} />

              <Route path="/dashboard/:_id/manage-user" element={<ManageTeam />} />
              <Route path="/dashboard/:_id/create-employee" element={<IndexPage />} />
              <Route path="/dashboard/:_id/shift" element={<Shift />} />
              {/* <Route
                path="/dashboard/manage-user/:id"
                element={<ManageTeam />}
              /> */}
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
