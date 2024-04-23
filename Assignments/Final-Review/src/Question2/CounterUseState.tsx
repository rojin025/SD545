import React, { useState } from 'react'

export default function CounterUseState() {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [sum, setSum] = useState(0);
    
    const push = () => {
        setNumbers([...numbers, Math.random()]);
        // setSum()
        // dispatch(Math.random())
    }

    return (
        <div>
            <h1>SUM: {sum}</h1>
            <ul>
                {
                    numbers.map((n, index) => <li key={index}>{n}</li>)
                }
            </ul>
            <button onClick={push}>Push</button>
            
        </div>
    )
}
