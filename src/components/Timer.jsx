import {useState } from 'react'

export default function Timer(props) {
//   const [state, setState] = useState();
const [time, setTime] = useState(props.startTime);//pass inital state. 0 in our case 
  
const []= useState()
  
    // let time = 0;
//note: dont use setTimeout, use useEffect is more appropriatte
  setTimeout(() => {
setTime(time +1)
  },2000)
  return (
    <div>
      <h1>Timer</h1>
      <p>{time}</p>
    </div>
  );
}
