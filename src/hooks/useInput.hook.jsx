import { useState } from 'react';

function useInput(initialVal = '') {
    const [state, setState] = useState(initialVal);

    const updateInput = (e) => {
        setState(e.target.value);
    };

    const resetInput = () => {
        setState('');
    }

    return [state, updateInput, resetInput];
};

export default useInput;