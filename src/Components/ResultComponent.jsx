import React from 'react';

const ResultComponent = ({weather}) => {
    return (
        <div className='w-75'>
            {
                weather ? 
                <div style={{marginTop:100}}>
                    <div>
                        <div className="row text-center">
                            <h3>{weather.location.name}</h3>
                            <h4>{weather.location.country}</h4>
                        </div>
                        <div className="row d-flex justify-content-center mt-3 text-center">
                            <div className="col-3">
                                <img src={weather.current.condition.icon} alt=""/>
                            </div>
                            <div className="col-3">
                                <div>{weather.current.condition.text}</div>
                                <div>{weather.current.temp_c} °</div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:50}}>
                        <iframe 
                            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249744.03243815698!2d${weather.location.lon}!3d${weather.location.lat}1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1676686254031!5m2!1ses-419!2spe`} 
                            width="100%" 
                            height="350" 
                            loading="lazy"></iframe>
                    </div> 
                </div>
                :
                <div></div>
            }
        </div>
    );
}

export default ResultComponent;
