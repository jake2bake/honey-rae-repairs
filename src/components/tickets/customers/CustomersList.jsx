import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../../services/userService"
import { User } from "../../../users/User"
import { Employee } from "../../../employees/Employee"
import { Link } from "react-router-dom"
import "./Customer.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then((customerArray) => {
            setCustomers(customerArray)
        })
    }, [])

    return (<div className="customers">
        {customers.map((customerObj) => {
            return (
                <Link to={`/customers/${customerObj.id}`} key={customerObj.id}>
           <User user={customerObj}/>
            
            </Link>
        )    
        })}
    </div>
    )
}