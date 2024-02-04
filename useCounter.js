import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue )

    const increment = ( value = 1) => {
        setCounter( (current) => current + value); //El current es para los test
    }

    const decrement = (value = 1) => {
        if (counter === 0  || counter-value < 0) return;
        setCounter((current) => current - value); //El current es para los test
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}