import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

interface Props {}

function DataManagementECRF(props: Props) {
    const {} = props
    const location = useLocation()
    return (
        <div className="underTabs">

			<div className='underTab-nav'>
                <Link to="/DataManagement/eCRF/Global" className={location.pathname==='/DataManagement/eCRF/Global'?'underTab_active':''}>Global</Link>
                <Link to="/DataManagement/eCRF/PerPatient" className={location.pathname==='/DataManagement/eCRF/PerPatient'?'underTab_active':''}>Per Patient</Link>
            </div>

			<Outlet />
		</div>
    )
}


export default DataManagementECRF
