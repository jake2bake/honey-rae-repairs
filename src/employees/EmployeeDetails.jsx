import { useParams } from "react-router-dom";
import { getSingleEmployee } from "../services/employeeService";
import { useEffect, useState } from "react";

import "./Employee.css"

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({});
    const { employeeId } = useParams();

    useEffect(() => {
        getSingleEmployee(employeeId).then((data) => {
            const employeeObj = data[0];
            setEmployee(employeeObj);
        });
    }, [employeeId]);

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email : </span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty : </span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info">Rate: </span>
                ${employee.rate}
            </div>
            <div>
                <span className="employee-info">Currently working on this amount of tickets: </span>
                {employee.employeeTickets ? employee.employeeTickets.length : 0}
            </div>
        </section>
    );
};