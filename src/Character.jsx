import { useState } from 'react'

function Character(props) {

    /* We're creating yet another state key: value pair on this component to
    keep track of which of my Character components is current*/
    const [current, setCurrent] = useState(false)

    /* This function is like a lightswitch. When we invoke it, it just negates
    or "flips" the value of current to the opposite of what it was. We're taking
    advantage of a free parameter you get when you call a useState setter and
    pass in a function. That free parameter is going to be the previous value of
    that key: value pair (which is why it's usually called 'prevState' or
    'previous'). We then take that previous state and negate it by using a
    '!'. '!' can be thought of as "not" so "true" becomes "not true" aka
    "false" and visa versa. */
    const currentFlag = () => setCurrent(prevState => !prevState)
        {/* The handleClick we passed in as a prop shows up again! We passed it
        down instead of just defining it inside of this component because we
        wanted it to interact with the [character, setCharacter] state of the
        Character component. 

        We're also doing something a bit strange inside of the onClick. Because
        onClick only performs a single function and we want to do two different
        things, we put calls to both our handleClick and currentFlag functions
        inside an anonymous function. That way, we're using only one function
        (the anonymous) so onClick is happy, but we still get two function calls
        out of it. Be careful to pass in the 'event' to both the anonymous and
        handleClick functions so handleClick knows what is being clicked*/}
    return(
        <li 
            onClick={(event)=> {props.handleClick(event); currentFlag()}} 
            key={props.id} 
            id={props.id} 
        >
            {props.name}
            <br />
            {/* these two things are being conditionally rendered by taking
            advantage of the way '&&' works. The code is read left to right and
            what comes after the && is only evaluated if the first part is
            true. We have 'current set to false by default up on line 7 so the
            image and first episode won't show up unless that value gets
            flipped. */}
            {current &&  <img src={props.image}/>}
            {current && props.firstEpisode}
        </li>
    )
}

export default Character
