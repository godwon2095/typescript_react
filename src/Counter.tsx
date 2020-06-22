import React, { useState, useReducer } from 'react';

type Action = { type: 'INCREASE' | 'DECREASE' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled Action Type');
  }
}

function Counter() {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  const onIncrease = () => dispatch({
    type: 'INCREASE'
  });
  const onDecrease = () => dispatch({
    type: 'DECREASE'
  });

  return (
    <div>
      <h1>{state}</h1>
      <div>
        <button onClick={onDecrease}>-</button>
        <input value={state} readOnly />
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  )
};

export default Counter;