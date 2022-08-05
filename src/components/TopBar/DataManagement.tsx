import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

interface Props {}

function DataManagement(props: Props) {
    const {} = props
    const location = useLocation()

    console.log('pathname',location.pathname)
    return (
        <div className="tabs">
			<h1>DataManagement</h1>

			<div className='tab-nav'>
                <Link to="/DataManagement/CRF" className={location.pathname.includes('/DataManagement/CRF')?'tab_active':''}>CRF</Link>
                <Link to="/DataManagement/eCRF" className={location.pathname.includes('/DataManagement/eCRF')?'tab_active':''}>eCRF</Link>
            </div>

			<Outlet />
		</div>
    )
}

export default DataManagement
