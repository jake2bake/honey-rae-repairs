import { useState, useEffect } from "react";
import { getStaffUsers } from "../services/userService";
import { Employee } from "./Employee";
import "./Employees.css"


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])
    return <div className="employees">
        {employees.map((employeeObj) => {
        return <div key={employeeObj.id}><Employee employee={employeeObj}/>
    </div>

        })}
    </div>
}