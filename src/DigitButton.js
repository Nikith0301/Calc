// import { ACTIONS } from "./App";

import React from 'react'

export default function DigitButton({dispatch,digit}) {
    const ACTIONS = {
        ADD_DIGIT: "add-digit",
        CHOOSE_OPERATION: "choose-operation",
        CLEAR: "clear",
        DELETE_DIGIT: "delete-digit",
        EVALUATE: "evaluate",
      }
  
    return (
        <button
          onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
          {digit}
        </button>
      )
}
