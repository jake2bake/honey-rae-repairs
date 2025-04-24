import { useNavigate } from "react-router-dom"
import { TicketList } from "./TicketList.jsx"

export const TicketFilterBar = ({setShowEmergencyOnly, setSearchTerm, currentUser, setShowOpenOnly}) => {
    const navigate = useNavigate()

    return (
        
            <div className="filter-bar">
                {currentUser.isStaff ? (
                    <>
                        <button className="filter-btn btn-primary" 
                                onClick={() => {
                                    setShowEmergencyOnly(false)
                                }}
                        >
                            Show All
                        </button>
                        <button className="filter-btn btn-info" 
                                onClick={() => {
                                    setShowEmergencyOnly(true)
                                }}
                        >
                            Emergency
                        </button>
                        <input 
                            onChange={(event) => {setSearchTerm(event.target.value)}}
                            type="text"
                            placeholder="Search Tickets"
                            className="ticket-search"
                        />
                    </>
                ) : (
                    <>
                        <button className="filter-btn btn-primary" onClick={() => {navigate("/tickets/create")}}>Create Ticket</button>
                        <button className="filter-btn btn-info" onClick={() => {setShowOpenOnly(true)}}>Open Tickets</button>
                        <button className="filter-btn btn-secondary" onClick={() => {setShowOpenOnly(false)}}>All My Tickets</button>
                    </>
                )}
            </div>
        
    )
}
