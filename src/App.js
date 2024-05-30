import { useState } from "react";

function App(){

    const [holder, setHolder] = useState(0)

    const plus = () =>{
        setHolder(holder + 1)
    }
    const minus = () => holder <= 0 ? setHolder(0) : setHolder( holder - 1)


    return (

        <div>
            <p>{holder}</p>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        </div>
    )
}
export default App