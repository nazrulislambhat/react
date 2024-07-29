import { useState } from 'react';


function UseState(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('nazrul');
    function handleClick(){
        console.log(count)
        setCount(count+1);
        console.log(count)

    }
    function handleName(){
        setName('Islam');
        console.log(name)
    }
    return (
        <div>

            <button onClick={handleClick}>Click</button>
            {count}

            <button onClick={handleName}>Change Name to Islam</button>
            {name}
        </div>
    )
}

export default UseState;