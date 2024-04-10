import { useState } from "react"


const Clock = () => {
  const [currentTime] = useState(new Date());
  
//   useEffect (() =>{
//     const timerID = setInterval(()=> tick(), 1000);
//     return ()=>{
//         clearInterval(timerID);
//     }
//   },[])    

//   const tick =()=>{
//     setCurrentTime(new Date());
//   }

  return (
    <div>
        <h1>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>
    </div>
  )
}

export default Clock