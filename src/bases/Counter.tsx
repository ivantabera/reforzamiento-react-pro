import React, { useState } from 'react'

export const Counter = ( {initialValue = 0} ) => {
    
    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        setCounter( prev => prev + 1 );
    }

    return (
        <>
            <span>Counter: {counter}</span>
            <button
                onClick={ handleClick }
            >
                +1
            </button>
        </>
    )
}
