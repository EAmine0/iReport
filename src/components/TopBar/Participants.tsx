import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

interface Props {}

function Participants(props: Props) {
    const {} = props
    const location = useLocation()
    return (
        <div className="tabs">
			<h1>Participants</h1>

			<div className='tab-nav'>
                <Link to="/Participants/Documents" className={location.pathname==='/Participants/Documents'?'tab_active':''}>Documents</Link>
            </div>

			<Outlet />
		</div>
    )
}

export default Participants
