import { useLocation, Link } from 'react-router-dom'
import { SidebarData } from './SideBarData'
import React from 'react'
import './SideBar.css'

interface Props {}

function SideBar(props: Props) {
    const {} = props

    const location = useLocation()

    return (
        <div className="sidebar">
			<div className="sidebar__items">
					<>
						{SidebarData.map((item) => (
							<Link
								key={item.title}
								to={item.path}
								className={
									location.pathname.includes(item.path) ? "sidebar_active" : ""
								}>
                                <span className='icon'>{item.icon}</span>
                                <span className='title'>{item.title}</span>
							</Link>
						))}
					</>
				
			</div>
		</div>
    )
}

export default SideBar
