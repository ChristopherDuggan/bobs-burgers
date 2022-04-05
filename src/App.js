import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Characters from './Characters'

function App() {
    // create a setter and getter for our data
    const [data, setData] = useState([])

    /* we want to do a fetch but we need react to wait until we get a response
    to try to render the data. We can hook onto the mount trigger to do the
    fetch with useEffect.*/
    useEffect(() => {
        fetch('https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=191')
            .then(response => response.json())
            .then(results => setData(results))
    }, [])
    /* ^^ that guy right there tells the useEffect not to apply its effect if
    the value inside it hasn't changed between re-renders. Because it's blank,
    it'll only run when the component mounts

    https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    */

    return (
        <div className="App">
            <h1>Bob's Burgers Characters!</h1>
            {/* create a Characters component and pass the data from our state
            (data A) as a prop that Characters is going to call data (data B)
            
                         B     A       */}
            <Characters data={data}/>
        </div>
    );
}

export default App;
