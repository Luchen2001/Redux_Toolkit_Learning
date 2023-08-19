import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
    const [value, setValue]= useState(1)
    const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2> Number of  Ice cream - {numOfIcecream}</h2>
            <button onClick={()=>dispatch(ordered())}>Order  Ice cream</button>
            <input type='number' value={value} onChange={(e)=>setValue(parseInt(e.target.value))}/>
            <button onClick={()=>dispatch(restocked(value))}>Restock  Ice cream</button>
        </div>
    )
}


