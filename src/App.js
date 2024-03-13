
import './app.css'
import Header from './Components/Header';
const data ='Shaiju Raju'
function App() {
  return (
    <div> 
      <Header data={data}/>
      <p>This is sample Description</p>
      <Hello/>
      <Hello/>
    </div>
  );
}

function Hello(){
return(<h1 className='hello'>  Hello World {data}</h1>)
}

export default App;
