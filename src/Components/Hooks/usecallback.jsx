import { useState, useCallback } from 'react';

const Usecallback = () => {

const [count , setCount] = useState(0);

const handleincreament = useCallback(() =>{
    setCount(count + 1);
},[count]);


return (<>

<p>Count : {count}</p>
<button onClick={handleincreament}>Increament</button>

</>)

}

export default Usecallback;