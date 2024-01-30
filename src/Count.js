import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from './redux/countReducer';

function Count(props) {
    const[amount,setAmount] = useState(0);
    const counter = useSelector(state=>state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <input type='number' onChange={(e)=>setAmount(Number(e.target.value))}/>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(increament(amount))}>Increament</button>
            <button onClick={()=>dispatch(decreament(amount))}>Decreament</button>
        </div>
    );
}

export default Count;
