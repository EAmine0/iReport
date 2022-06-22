import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

interface Props {}

function Milestones(props: Props) {
    const {} = props

    const location = useLocation()
    return (
        <div className="tabs">
			<h1>Milestones</h1>

			<div className='tab-nav'>
                <Link to="/Milestones/GANTTCountry" className={location.pathname==='/Milestones/GANTTCountry'?'tab_active':''}>GANTT Country</Link>
                <Link to="/Milestones/GANTTSite" className={location.pathname==='/Milestones/GANTTSite'?'tab_active':''}>GANTT Site</Link>
                <Link to="/Milestones/GANTTStudy" className={location.pathname==='/Milestones/GANTTStudy'?'tab_active':''}>GANTT Study</Link>
                <Link to="/Milestones/Timeline" className={location.pathname==='/Milestones/Timeline'?'tab_active':''}>Timeline</Link>
                <Link to="/Milestones/TimelineStudy" className={location.pathname==='/Milestones/TimelineStudy'?'tab_active':''}>Timeline Study</Link>
                <Link to="/Milestones/TimelineTransverse" className={location.pathname==='/Milestones/TimelineTransverse'?'tab_active':''}>Timeline Transverse</Link>
                <Link to="/Milestones/Details" className={location.pathname==='/Milestones/Details'?'tab_active':''}>Details</Link>
            </div>

			<Outlet />
		</div>
    )
}

export default Milestones
