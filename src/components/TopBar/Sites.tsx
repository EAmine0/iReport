import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'
import './TopBar.css'

interface Props {}

function Sites(props: Props) {
    const {} = props
    const location = useLocation()
    return (
        <div className="tabs">
			<h1>Sites</h1>

			<div className='tab-nav'>
                <Link to="/Sites/status" className={location.pathname==='/Sites/status'?'tab_active':''}>Status</Link>
                <Link to="/Sites/activities" className={location.pathname==='/Sites/activities'?'tab_active':''}>Activities</Link>
                <Link to="/Sites/documents" className={location.pathname==='/Sites/documents'?'tab_active':''}>Documents</Link>
                <Link to="/Sites/financial_agreement" className={location.pathname==='/Sites/financial_agreement'?'tab_active':''}>Financial Agreement</Link>
            </div>

			<Outlet />
		</div>
    )
}

export default Sites



// import { Outlet } from 'react-router-dom'
// import { Link, useLocation } from 'react-router-dom'
// import React from 'react'
// import './TopBar.css'

// interface Props {}

// function TopBarSites(props: Props) {
//     const {} = props

//     const location = useLocation()
//     return (
//         <div className="tabs">
// 			<h1>Sites</h1>

// 			<div className='tab-nav'>
//                 <Link to="/Sites/status" className={location.pathname==='/Sites/status'?'tab_active':''}>Status</Link>
//                 <Link to="/Sites/activities" className={location.pathname==='/Sites/activities'?'tab_active':''}>Activities</Link>
//                 <Link to="/Sites/documents" className={location.pathname==='/Sites/documents'?'tab_active':''}>Documents</Link>
//                 <Link to="/Sites/financial_agreement" className={location.pathname==='/Sites/financial_agreement'?'tab_active':''}>Financial Agreement</Link>
//             </div>

// 			<Outlet />
// 		</div>
//     )
// }

// export default TopBarSites
