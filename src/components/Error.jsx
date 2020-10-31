import React from 'react'

import err404 from '../images/404error.svg'
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import noWifi from '../images/nowifi.svg'
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Error = ({ city, err }) => {
    console.log()
    return (
        <div className="error">
            {err.message === "Network Error" ?  (
                <div>
                    <img src={noWifi} title="Icon made by freepik" alt="Connection Error" width={300}/>
                    <p className="mt-4"> Brak połączenia z internetem </p>
                </div>
            ) : (
                <div>
                    <img src={err404} title="Icon made by freepik" alt="Not found" width={300}/>
                    <p className="mt-4"> Nie znaleziono lokalizacji {`"${city}"`} </p>
                </div>
                
            )}
        </div>
    )
}

export default Error
