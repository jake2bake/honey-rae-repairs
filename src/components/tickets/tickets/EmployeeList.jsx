import { useEffect, useState } from "react"
import { TicketList } from "./TicketList"
import { getAllEmployees } from "../../../services/employeeService"

export const Ticket = ({ticket}) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmploy] = useState({})

    useEffect(() => {
        getAllEmployees().then((employeesArray) => {
            setEmployees(employeesArray)
        })
    }, [])

    useEffect(() => {
        const foundEmployee = employees.find((employee) => employee.id === ticket.employeeTickets?.[0]?.employeeId)
        setAssignedEmploy(foundEmployee)
    }, [employees, ticket]) 

    return (<section className="ticket">
    <header className="ticket-info">#{ticket.id}</header>
    <div>{ticket.description}</div>
    <footer>
        <div>
            <div className="ticket-info">assignee</div>
            <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
        </div>
      <div>
      <div className="ticket-info">Emergency</div>
      <div>{ticket.emergency ? "yes" : "no"}</div>
      </div>
    </footer>
    
  </section>
    )
}