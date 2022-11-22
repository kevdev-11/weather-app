import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SettingsWeather from './SettingsWeather';
import axios from 'axios';

const Weather = () => {

    const dataBuilder = (d) => {

        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];

        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "saturday"
        ]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        const findDate = `${day} ${date} ${month} ${year}`;
        return findDate;

    }

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [climate, setClimate] = useState("");
    const [isChange, setIsChange] = useState(true);


    useEffect(() => {

        const api = {
            link: "https://api.openweathermap.org/data/2.5/weather?",
            key: '9dce4e7f604865c78696394fe894c7fb'
        }
        const success = (pos) => {
            setLatitude(pos.coords.latitude)
                setLongitude(pos.coords.longitude)
        }
        const options = {
            enableHighAccuracy: false,
            timeout: 1000,
            
        }
        const error = (err) => { console.warn(`ERROR(${err.code}): ${err.message}`) };

        axios.get(`${api.link}lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`)
            .then(res => setClimate(res.data))
            .catch((error) => {
                if (error.res) {
                    console.log(error.res.data);
                }
            });

        return window.navigator.geolocation.getCurrentPosition(success, error, options);

    }, [longitude, latitude]);

    console.log(climate);

    const handleToggle = () => {
        setIsChange(!isChange);
    }
    return (
        <div className='display_app'>
            <div className={(typeof climate.main != 'undefined')?
            ((climate.main.temp > 15)? 'contain' : 'contain retain') : 'contain'}>
                <div className='name'>
                    <h1>{climate.name}<br />
                    <p style={{fontSize: '40px'}}>{climate.sys?.country}</p>
                    </h1>
                </div>
                <div className='clock'>
                </div>
                <div className='box-state'>
                    <div className='date-feature'>
                        {dataBuilder(new Date())}
                    </div>
                    <div className='display-temp'>
                        {isChange ? Math.round(climate.main?.temp) : Math.round(climate.main?.temp) * 9 / 5 + 32}
                        {isChange ? "°C" : "°F"}
                        <button onClick={handleToggle}>
                                <h2>Change to F°</h2>
                            </button>
                        <div>
                            
                        </div>

                    </div>
                </div>
            </div>
            <div >
                <SettingsWeather className='set-display' props={climate} />
            </div>

        </div>
    );
}

export default Weather;