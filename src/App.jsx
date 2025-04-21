import "./App.css"
import { CustomerList } from "./components/tickets/customers/CustomersList"
import { TicketList } from "./components/tickets/tickets/TicketList"
import { EmployeeList } from "./employees/EmployeeList"
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"
import { Welcome } from "./components/welcome/welcome"
import { Outlet } from "react-router-dom"
import { CustomerDetails } from "./components/tickets/customers/CustomerDetails"
import { EmployeeDetails } from "./employees/EmployeeDetails"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<><NavBar /><Outlet /></>}>
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
        <Route path="customers" element={<Outlet />}>
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="employees" element={<Outlet />}>
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};
