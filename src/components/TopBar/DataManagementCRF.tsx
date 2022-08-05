import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

interface Props {}

function DataManagementCRF(props: Props) {
    const {} = props
    const location = useLocation()
    return (
        <div className="underTabs">

			<div className='underTab-nav'>
                <Link to="/DataManagement/CRF/Global" className={location.pathname==='/DataManagement/CRF/Global'?'underTab_active':''}>Global</Link>
                <Link to="/DataManagement/CRF/PerPatient" className={location.pathname==='/DataManagement/CRF/PerPatient'?'underTab_active':''}>Per Patient</Link>
            </div>

			<Outlet />
		</div>
    )
}

export default DataManagementCRF
