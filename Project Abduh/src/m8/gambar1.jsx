import { useState } from "react";

export function UseCounter () {
    const [counter, setCounter] = useState(0);

    function increment () {
        setCounter(counter + 1)} 

    function decrement () {
        setCounter(counter - 1)}; 

    function reset () {
        setCounter(0)};
        return (
            <div style={{ textAlign: 'center', marginTop: '50px', color: 'pink' }}>
              <h1>Counter: {counter}</h1>
              <div>
                <button onClick={increment} style={{ margin: '5px', padding: '10px 20px' }}>
                  Tambah
                </button>
                <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' }}>
                  Kurang
                </button>
                <button onClick={reset} style={{ margin: '5px', padding: '10px 20px' }}>
                  Reset
                </button>
              </div>
            </div>
          );
        }
    
