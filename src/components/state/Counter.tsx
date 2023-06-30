import { useReducer } from 'react';

type counterType = {
    count: number
}

type updateAction = {
    type: 'increment' | 'decrement',
    payload: number
}

type resetAction = {
    type: 'reset'
}

type actionType = updateAction | resetAction

const initialState = { count: 0 }
const reducer = (state: counterType, action: actionType) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState;
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count - {state.count}</h2>
            <div>
                <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    )
}