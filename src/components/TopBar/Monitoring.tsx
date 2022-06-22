import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

interface Props {}

function Monitoring(props: Props) {
    const {} = props

    const location = useLocation()
    return (
        <div className="tabs">
			<h1>Monitoring</h1>

			<div className='tab-nav'>
                <Link to="/Monitoring/SelectionPhase" className={location.pathname==='/Monitoring/SelectionPhase'?'tab_active':''}>Selection phase</Link>
                <Link to="/Monitoring/InitiationPhase" className={location.pathname==='/Monitoring/InitiationPhase'?'tab_active':''}>Initiation phase</Link>
                <Link to="/Monitoring/FollowUpPhase" className={location.pathname==='/Monitoring/FollowUpPhase'?'tab_active':''}>Follow-up phase</Link>
                <Link to="/Monitoring/CloseOutPhase" className={location.pathname==='/Monitoring/CloseOutPhase'?'tab_active':''}>Close-out phase</Link>
                <Link to="/Monitoring/Details" className={location.pathname==='/Monitoring/Details'?'tab_active':''}>Details</Link>
            </div>

			<Outlet />
		</div>
    )
}

export default Monitoring
