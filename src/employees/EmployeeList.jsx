import { useState, useEffect } from "react";
import { getStaffUsers } from "../services/userService";
import { Employee } from "./Employee";
import "./Employees.css"
import { Link } from "react-router-dom";


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])
    return (<div className="employees">
        {employees.map((employeeObj) => {
        return (<Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
        <Employee employee={employeeObj}/>
    </Link>
    )

        })}
    </div>
    )
}