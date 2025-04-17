
import "./App.css"
import { CustomerList } from "./components/tickets/customers/CustomersList"
import { TicketList } from "./components/tickets/tickets/TicketList"
import { EmployeeList } from "./employees/EmployeeList"


export const App = () => {
  return <>
  {/* <TicketList />  */}
  {/* <CustomerList /> */}
  <EmployeeList />
  </>
}
