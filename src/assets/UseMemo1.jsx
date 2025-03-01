import React, { useMemo, useState } from 'react'

const UseMemo1 = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(5);
  const factorial = useMemo(() => fact(number), [number]);
  // const factorial = fact(number)    // without use Memo Hook



  return (

    <center>
      <h1>Factorial :{factorial}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter Increment</button> <br />
      <button onClick={() => setNumber(number + 1)}>Number Increment</button> <br />
      counter : {counter}
    </center>
  )
}

const fact = (n) => {
  let answer = 1;
  for (var i = n; i >= 1; i--) {
    answer = answer * i;
  }
  console.log('Factorial function calling')
  return answer;
}

export default UseMemo1