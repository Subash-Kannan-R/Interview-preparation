import { useReducer } from "react";
import counterReducer from "./Counterreducer";

const Finalcounter =() => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            <h2>useReducer Counter</h2>
            <p>Count: {state.count}</p>
            <div>
                <button
                    onClick={() => dispatch({ type: 'INCREMENT' })}
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch({ type: 'DECREMENT' })}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
export default Finalcounter;