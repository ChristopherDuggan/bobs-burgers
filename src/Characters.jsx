import { useState } from 'react'
import Character from './Character'

function Characters(props) {
    /* create a setter and getter for character. This state lives on the
    Characters component, not on the App component like the state that's over
    there */
    const [character, setCharacter] = useState({})

    /* we have a handleclick that is going to make an API request for a single
    character based on its id, then use the 'character' setter to put the result
    in our state. We're declaring it in our Character but it's not going to be
    called in our character... hmmmmm......*/
    const handleClick = (event) => {
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${event.target.id}`)
            .then(response => response.json())
            .then(result => setCharacter(result))
    }
    return(
        <ul>
            {
                /* we can use Array.prototype.map() to iterate through the
                entire data array that we're getting from props. The map will
                take each item in the array (which it happens to be calling
                'character' but could call anything) and making a Character
                component that is being passed some props. the handleClick
                function doesn't look too weird but that second one is
                strang... */

                props.data.map(character => {

                    return (<Character 
                        handleClick={handleClick}
                        /* This is rest parameter syntax in action!

                        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
                        https://stackoverflow.com/questions/43484302/what-does-rest-mean-in-react-jsx

                        In short, it lets you pass in an object to a function as
                        its arguments. The mdn docs and stack overflow answer
                         can explain it better than I can
                         */
                        {...character}
                    />)
                })
            }
        </ul>
    )
}

export default Characters
