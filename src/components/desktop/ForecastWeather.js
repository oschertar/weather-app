import React from 'react';

import Daily from './Daily';

export default function ForecastWeather({ daily }) {
    
    console.log(daily);



    
    return (
        <div className="mt-4 text-white">
            <h3 className="text-4xl text-center mb-5">Pronóstico diario</h3>
            <div className="grid grid-cols-8 place-items-center max-w-screen-lg mx-auto my-0">
            {daily.map(day => {
                return (
                <div>
                    <Daily day={day} key={day.dt}/>
                </div>
                )
            })}
            </div>
           
        </div>
    )
}
