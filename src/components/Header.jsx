import React from 'react'

const Header = ({ city }) => {
    let date = new Date().toLocaleString().slice(0, -3)
    
    return (
        <div className="header">
            <h3> <i className="fas fa-map-marker-alt"></i> {city} </h3>
            <h5> {date} </h5>
        </div>
    )
}

export default Header
