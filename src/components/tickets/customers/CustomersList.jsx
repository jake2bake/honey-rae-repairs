import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../../services/userService"
import { User } from "../../../users/User"
import { Employee } from "../../../employees/Employee"
import "./Customer.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then((customerArray) => {
            setCustomers(customerArray)
        })
    }, [])

    return <div className="customers">
        {customers.map((customerObj) => {
            return <div key={customerObj.id}><User user={customerObj}/>
            </div>
           
            
        })}
    </div>
}