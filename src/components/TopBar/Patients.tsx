import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

interface Props {}

function Patients(props: Props) {
    const {} = props
    const location = useLocation()
    return (
        <div className="tabs">
			<h1>Patients</h1>

			<div className='tab-nav'>
                <Link to="/Patients/Recruitment" className={location.pathname==='/Patients/Recruitment'?'tab_active':''}>Recruitment</Link>
                <Link to="/Patients/Documents" className={location.pathname==='/Patients/Documents'?'tab_active':''}>Documents</Link>
                <Link to="/Patients/aesae" className={location.pathname==='/Patients/aesae'?'tab_active':''}>AE/SAE</Link>
            </div>

			<Outlet />
		</div>
    )
}

export default Patients
