import { Route, Outlet, Routes, UNSAFE_useFogOFWarDiscovery } from "react-router-dom"
import { EmployeeNav } from "../components/nav/EmployeeNav"
import { Welcome } from "../components/welcome/welcome"
import { EmployeeDetails } from "../employees/EmployeeDetails"
import { EmployeeList } from "../employees/EmployeeList"
import { TicketList } from "../components/tickets/tickets/TicketList"
import { CustomerList} from "../components/tickets/customers/CustomersList"
import { CustomerDetails } from "../components/tickets/customers/CustomerDetails"
import { useEffect, useState } from "react"
import { EmployeeForm } from "../components/forms/EmployeeForm"
import { EmployeeViews } from "./EmployeeViews"
import { CustomerViews } from "./CustomerViews"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
  const localHoneyUser = localStorage.getItem("honey_user")
  const honeyUserObject = JSON.parse(localHoneyUser)

  setCurrentUser(honeyUserObject)
}, [])

  return currentUser.isStaff ? (<EmployeeViews currentUser={currentUser} /> 

  ):  (
  <CustomerViews currentUser={currentUser}/>
  )
}