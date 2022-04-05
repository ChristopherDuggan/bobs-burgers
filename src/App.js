import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Characters from './Characters'

function App() {

    const [data, setData] = useState([])

    useEffect(() => {
    fetch('https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=191')
        .then(response => response.json())
        .then(results => {
            setData(results)
        })
    }, [])
   return (
        <div className="App">
            <h1>Bob's Burgers Characters!</h1>
            <Characters data={data}/>
        </div>
    );
}

export default App;
