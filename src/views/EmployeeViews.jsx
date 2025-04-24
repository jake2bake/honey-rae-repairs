import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeNav} from "../components/nav/EmployeeNav"
import { TicketList } from "../components/tickets/tickets/TicketList"
import { Welcome } from "../components/welcome/welcome"
import { CustomerList } from "../components/tickets/customers/CustomersList"
import { CustomerDetails } from "../components/tickets/customers/CustomerDetails"
import { EmployeeForm } from "../components/forms/EmployeeForm"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeDetails } from "../employees/EmployeeDetails"

export const EmployeeViews = ({ currentUser }) => {
    return (
        <Routes>
  <Route path="/" element={<><EmployeeNav /><Outlet /></>}>
  <Route index element={<Welcome />} />
  <Route path="tickets" 
  element={<TicketList currentUser={currentUser}/>} />
  <Route path="customers" element={<Outlet />}>
    <Route index element={<CustomerList />} />
    <Route path=":customerId" element={<CustomerDetails />} />
  </Route>
  <Route path="employees" element={<Outlet />}>
    <Route index element={<EmployeeList />} />
    <Route path=":employeeId" element={<EmployeeDetails />} />
  </Route>
  <Route path="profile" 
  element={<EmployeeForm currentUser={currentUser}/>}/>
</Route>
</Routes>
    )
}