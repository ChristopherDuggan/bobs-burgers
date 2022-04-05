import { useState } from 'react'

function Character(props) {

    const [current, setCurrent] = useState(false)
    const currentFlag = () => setCurrent(prevState => !prevState)
    return(
        <li onClick={(e)=> {props.handleClick(e); currentFlag()}} key={props.id} id={props.id} >
            {props.name}
            <br />
            {current &&  <img src={props.image}/>}
            {current && props.firstEpisode}
        </li>
    )
}

export default Character
