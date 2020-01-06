import { useState } from 'react';

function useToggle(initialVal = false) {
    //sets a generic state based off what we pass and an updater for true false;
    const [state, setState] = useState(initialVal);

    //have a generic function to negate initialVal, only works for true false
    const toggle = () => {
        setState(!state);
    };

    return [state, toggle];
};

export default useToggle;