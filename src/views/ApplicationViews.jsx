import { Route, Outlet, Routes, UNSAFE_useFogOFWarDiscovery } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/welcome"
import { EmployeeDetails } from "../employees/EmployeeDetails"
import { EmployeeList } from "../employees/EmployeeList"
import { TicketList } from "../components/tickets/tickets/TicketList"
import { CustomerList} from "../components/tickets/customers/CustomersList"
import { CustomerDetails } from "../components/tickets/customers/CustomerDetails"
import { useEffect, useState } from "react"
import { EmployeeForm } from "../components/forms/EmployeeForm"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
  const localHoneyUser = localStorage.getItem("honey_user")
  const honeyUserObject = JSON.parse(localHoneyUser)

  setCurrentUser(honeyUserObject)
}, [])

  return <Routes>
  <Route path="/" element={<><NavBar /><Outlet /></>}>
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
}
