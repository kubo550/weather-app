import React, { useRef, useEffect } from 'react'

const Search = ({ setCity }) => {

    const inputRef = useRef()
    
    const handleClick = () => {
        const val = inputRef.current.value 
        if (val) {
            setCity(val)
            inputRef.current.value  = ""
        }
    } 

    useEffect(() => {
        const handleKey = ({ keyCode }) => keyCode === 13 ? handleClick() : null
        
        document.addEventListener('keydown', handleKey)

        return () => document.removeEventListener('keydown', handleKey)
    })
    
    const iconStyle = {color: '#111', padding: '4px'}

    return (
        <div className="form__group field">
            <input type="input" className="form__field" placeholder="Name" ref={inputRef} autoFocus />
            <label className="form__label">City</label>
        </div>
            
    )
}

export default Search
