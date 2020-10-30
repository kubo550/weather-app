import React, { useRef, useEffect } from 'react'

const Search = ({ setCity }) => {

    const inputRef = useRef()
    
    const handleClick = () => {
        const val = inputRef.current.value 
        if (val) setCity(val)
    }

    useEffect(() => {
        const handleKey = ({ keyCode }) => keyCode === 13 ? handleClick() : null
        
        document.addEventListener('keydown', handleKey)

        return () => document.removeEventListener('keydown', handleKey)
    })
    
    const iconStyle = {color: '#111', padding: '4px'}

    return (
        <div className="search">
            <input type="text" placeholder="Enter city name..." autoFocus ref={inputRef} />
            <button onClick={handleClick}>
                <i className="fas fa-globe-europe" style={iconStyle}></i>
            </button>
        </div>
    )
}

export default Search
