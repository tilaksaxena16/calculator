import React from "react";
import { add, sub, mul, div } from './Calc';

const App = () => {

  return (
    <>
      <ul>
        <li>sum of two no is {add(40, 2)}</li>
        <li>sub of two no is {sub(78, 25)}</li>
        <li>mul of two no is {mul(48, 2)}</li>
        <li>div of two no is {div(152, 2)}</li>
      </ul>
    </>
  )
}

export { App };