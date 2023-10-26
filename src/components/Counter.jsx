import { useState } from "react";
export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount((oldValue) => oldValue + 1);
  };

  const clearCounterHandler = () => {
    setCount(0);
  };

  //!Conditional rendering V1
  // if(count < 0){
  //     return(
  //         <h3>Invalid count!!!</h3>
  //     )
  // }

  //!Conditional rendering V2
  // let warning = null
  // if(count < 0){
  //     warning = <p>Invalid count</p>
  // }

  let msg = null;

  switch (count) {
    case 1:
      msg = "first blood";
      break;
    case 2:
      msg = "dobble kill";
      break;
    case 3:
      msg = "tripple kill";
      break;
    case 4:
      msg = "quadra kill";
      break;
    case 5:
      msg = "penta kill";
      break;
  }




  return (
    <div>
      <h3>Counter</h3>

      {/* //!Conditional rendering V2 */}
      {/* {warning} */}

      {/* //!Conditional rendering V3 */}
      {count < 0 ? <p>Invalid count</p> : <p>Valid Count</p>}

      {count == 0 && <p>Plese start incrementing</p>}

      <h4>{msg}</h4>

      <p>Count: {count}</p>

      <button onClick={incrementClickHandler}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={clearCounterHandler}>clear</button>
    </div>
  );
}
