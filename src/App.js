import { useState } from "react";
function App() {
  const [count,setCount] =useState(0)
  const addCount =()=>{
    setCount(count+1);
    console.log(count);
  }
  return (
    <div> 
      <button onClick={addCount}> Add</button>
      <h1>Count : {count}</h1>
      
    </div>
  );
}



export default App;
