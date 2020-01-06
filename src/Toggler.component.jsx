import React from 'react';

import useToggle from './hooks/useToggle.hook';

function Toggler() {
    const [isHappy, setIsHappy] = useToggle(true);
    const [isHeartBroken, setIsHeartBroken] = useToggle(false); //doesn't need initial but still good

    return (
        <>
            <h1 onClick={setIsHappy}>{isHappy ? '😀' : '😪'}</h1>
            <h1 onClick={setIsHeartBroken}>{isHeartBroken ? '💔' : '❤️'}</h1>
        </>
    )
};

export default Toggler;

//recap: We created a side component that uses use state to set a piece of state. We did this to make a toggle reusable based off true/false.
//In the other component, we have a function that accepts an initial state, in this case a true or false.  Since it is a true false thing, we set an initial
//default in the function to false in case nothing is passed.  We then use, useState to set in initial state and an updater function.  We create
// another function that just negates our state value and return the state and the function.  Now we can just import that function and use it in place
// of useState and now our onclick will reference a function rather then rewrite an anonymous function on render