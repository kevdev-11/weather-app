import React from 'react';

const SettingsWeather = ({props}) => {
    
    return (
        <div>
            <div className='databox'>
                <div className='feature-img'>
                <h1 className='title-data'>{props.weather?.[0].description}</h1>
                <img style={{width:"150px", height:"150px", borderRadius: "50%", backgroundColor:'rgba(240, 226, 233, 0.2)'}} src={`http://openweathermap.org/img/wn/${props.weather?.[0]?.icon}@2x.png`} />
                <h3 style={{fontFamily:'Dancing Script, cursive', fontSize:'15px', letterSpacing:'0.2vw'}}>{props.weather?.[0].main}</h3>
                </div>
                <div className='data-weather'>
                <h2> <i className="fa-solid fa-temperature-high"></i> <b>Temperature:</b> {Math.round(props.main?.temp)}°C<hr /></h2>
                <h2><i className="fa-solid fa-icicles"></i> Humidity: {props.main?.humidity}%<hr /></h2>
                <h2><i className="fa-solid fa-poo-storm"></i> Pressure: {props.main?.pressure}mb<hr /></h2>
                <h2><i className="fa-solid fa-wind"></i> Wind speed: {props.wind?.speed}km/h<hr /></h2>
                <h2> <i className="fa-solid fa-eye"></i> Visibility: {props.visibility} mi<hr /></h2>
                </div>
            </div>
        </div>
    );
};

export default SettingsWeather;