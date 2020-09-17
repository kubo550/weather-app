import React from 'react'

function ButtonsGrid({user, colorsArr}) {

    const sendData = col => {
        const data = { 
            user,
            color: col,
            createdAt: Date.now()
        }
        console.log(data)
    }
    return (
        <div className="classifayer">
            {colorsArr.map(color => {
                return (
                    <button key={color} className={`${color} color-btn`} style={{background:color}} onClick={() => sendData(color) }>{color}</button>
                )
            })}
        </div>
    )
}

export default ButtonsGrid
