import React from 'react';

export default function Indicator( {name, unity, colorText, colorBg}) {
    return (
        <div className={`text-${colorText} bg-${colorBg} rounded-3xl px-2 py-5`}>
            <p className='text-sm'>{name}</p>
            <p className='font-bold text-xl'>{unity}</p>
        </div>
    )
}
