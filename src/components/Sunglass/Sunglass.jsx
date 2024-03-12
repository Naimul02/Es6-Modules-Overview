// react er eta asteche build in package theke
import React, { useEffect } from 'react';
import { add, multiply , divideTheFirstNumberByTheSecondNumber as divide } from '../../Utils/calculate';
// import add from '../../Utils/calculate';


// default vabe export kora hole tahole ar object akare import kora lage na.
import Watch from '../Watch/Watch';
import './Sunglass.css'

const Sunglass = () => {
  const first = 55;
  const second = 199;

  useEffect()
  const sum = add(first , second);
  const mult = multiply(first , second);
  const vaag = divide(first , second)
  return (
    <div>
        <Watch></Watch> 
    </div>
  );
};

export default Sunglass;