import { useState, useEffect, useRef } from 'react'
import Character from './Character'

function Characters(props) {
    const isMounted = useRef(false)

    const [character, setCharacter] = useState({})

    const handleClick = (event) => {
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${event.target.id}`)
            .then(response => response.json())
            .then(result => setCharacter(result))
    }
    return(
        <ul>
            {
                props.data.map(character => {

                    return (<Character 
                        handleClick={handleClick}
                        {...character}
                    />)
                })
            }
        </ul>
    )
}

export default Characters
