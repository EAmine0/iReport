import React from 'react'
import './Header.css'

interface Props {}

function Header(props: Props) {
    const {} = props

    return (
        <>
        <div className="header-container">
            <img className="icta-mapworld-image no-select" src={require('./../../assets/Carte_Reseau_Trim.png')} alt="image" />
            <div className="header-content">
                <div className="header-left-content">
                    <img className="icta-logo-image no-select" src={require('./../../assets/Logo_ICTA_WHITE.png')} />
                    <span className="header-title awesome-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iReport - Study </span>
                </div>
            </div>
            <div className="header-bottom" />
        </div>
        </>
    )
}

export default Header
