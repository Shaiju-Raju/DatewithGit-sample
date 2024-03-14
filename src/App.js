function App() {
  let count = 0;
  function addCount(){
    count=count+1
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
