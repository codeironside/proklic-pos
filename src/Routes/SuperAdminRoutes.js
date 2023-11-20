
import Team from "../pages/team/TeamIndex";
import Invoices from "../pages/invoices/InvoicesIndex";
import Contacts from "../pages/contacts/ContactsIndex";
import Bar from "../pages/bar/barIndex";
import Form from "../pages/forms/FormsIndex";
import Line from "../pages/line";
import Pie from "../pages/pie";
import FAQ from "../pages/faqs/FaqIndex";
import Geography from "../pages/geography";
import Calendar from "../pages/calender/CalenderIndex"


import DashboardIndex from "../pages/Dashboard/DashboardIndex"
import EventDef from "../proklic_pages/EventDefinations/EventDef"
import EventArea from "../proklic_pages/EventArea/EventArea"
import TaskScheduler from "../proklic_pages/TaskSch/TashScheduler"


const SuperAdminRoutes = [ 
    
    {path: '/', exact:true,  name: "DashboardIndex", element:DashboardIndex},
    {path: '/admin/team', exact:true,  name: "Team", element:Team},
    {path: '/admin/contacts', exact:true,  name: "Contacts", element:Contacts},
    {path: '/admin/invoices', exact:true,  name: "Invoices", element:Invoices},
    {path: '/admin/form', exact:true,  name: "Form", element:Form},
    {path: '/admin/bar', exact:true,  name: "Bar", element:Bar},
    {path: '/admin/pie', exact:true,  name: "Pie", element:Pie},
    {path: '/admin/line', exact:true,  name: "Line", element:Line},
    {path: '/admin/faq', exact:true,  name: "FAQ", element:FAQ},
    {path: '/admin/calendar', exact:true,  name: "Calendar", element:Calendar},
    {path: '/admin/geography', exact:true,  name: "Geography", element:Geography},

    // {path: '/', exact:true,  name: "Dashboard", element:DashboardIndex},
    // {path: '/', exact:true,  name: "Dashboard", element:DashboardIndex},
    // {path: '/', exact:true,  name: "Dashboard", element:DashboardIndex},
    // {path: '/v-admin/booked-props', exact:true, name: "BookedProps",  element: BookedProps},
    // {path: '/v-admin/avail-props', exact:true, name: "AvailableProps",  element: AvailableProps},
    

]

export default SuperAdminRoutes;

{/* 
            <Route path="/register" element={<Register />} />


              <Route path="/" element={<DashboardIndex />} />
              <Route path="/event_def" element={<EventDef />} />
              <Route path="/event_area" element={<EventArea />} />
              <Route path="/tasks" element={<TaskScheduler />} />

              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> 
            
            */}