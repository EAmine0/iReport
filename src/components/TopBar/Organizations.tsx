import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

interface Props {}

function Organizations(props: Props) {
    const {} = props
    const location = useLocation()
    return (
        <div className="tabs">
			<h1>Organizations</h1>

			<div className='tab-nav'>
                <Link to="/Organizations/Documents" className={location.pathname==='/Organizations/Documents'?'tab_active':''}>Documents</Link>
            </div>

			<Outlet />
		</div>
    )
}

export default Organizations
