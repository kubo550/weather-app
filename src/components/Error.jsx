import React from 'react'

import err404 from '../images/404error.svg'
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import err491 from '../images/key.svg'
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import noWifi from '../images/nowifi.svg'
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Error = ({ city, err }) => {
    return (
        <div className="error">
            {err.message === "Network Error" ?  (
                <div>
                    <img src={noWifi} title="Icon made by freepik" alt="Connection Error" width={300}/>
                    <p className="mt-4"> Brak połączenia z internetem </p>
                </div>
            ) : err.message === "Request failed with status code 401" ? (
                <div>
                    <img src={err491} title="Icon made by freepik" alt="Bad Api Key" width={300}/>
                    <p className="mt-4"> invalide API Key. Click <a href="https://openweathermap.org/api">here</a></p>
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
