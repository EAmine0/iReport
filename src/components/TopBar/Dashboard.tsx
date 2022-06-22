import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import React from 'react'
import './TopBar.css'

interface Props {}

function Dashboard(props: Props) {
    const {} = props
    const location = useLocation()
    return (
        <div className="tabs">
			<h1>Operational Dashboard</h1>

			<div className='tab-nav'>
                <Link to="/dashboard/clinic" className={location.pathname==='/dashboard/clinic'?'tab_active':''}>Clinical Operational</Link>
                <Link to="/dashboard/dmcrf" className={location.pathname==='/dashboard/dmcrf'?'tab_active':''}>DM-CRF</Link>
                <Link to="/dashboard/dmecrf" className={location.pathname==='/dashboard/dmecrf'?'tab_active':''}>DM-eCRF</Link>

                {/* {SidebarData.map((item) => (
							<Link
								key={item.title}
								to={item.path}
								className={
									location.pathname.includes(item.path) ? "sidebar_active" : ""
								}>
                                <span className='icon'>{item.icon}</span>
                                <span className='title'>{item.title}</span>
							</Link>
						))} */}
            </div>

			<Outlet />
		</div>
    )
}

export default Dashboard