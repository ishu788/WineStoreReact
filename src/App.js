// import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(true)
//const [message] = useState('Welcome')


useEffect( ()  => {
  fetch('https://api.sampleapis.com/wines/reds')
  .then( res => res.json())
  .then (data => setData(data))
  .catch(err=> console.log(err))
  .finally(() => setIsLoading(false))
  
},[])


  return (
    <div className="App">
    {
      isLoading? <p>Data is Loading....</p>:
        <div className="cards-container">
        {data.slice(1, 8).map((wine, index) => (
          <div className="card" key={index}>
            <img src={wine.image} alt={`alt for ${wine.wine}`} />
            <p>{wine.wine}</p>
          </div>))}  
       </div>
    }


    {/* <h1>{score}</h1>
    <button onClick= {() => setScore(prevScore=> prevScore+1)}> Plus </button>
    <button onClick= {() => setScore(prevScore=> prevScore-1)}> Minus </button>
    <button onClick= {() => setScore(0)}> Reset </button>
    <p>{instruction}</p>*/}
    </div> 
  );
}

export default App;
