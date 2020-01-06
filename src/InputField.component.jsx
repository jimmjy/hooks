import React from 'react';

import UseInput from './hooks/useInput.hook';

//remember to still desctructure this, it is a component
function InputField({ initialValue }) {
    const [email, updateEmail, resetEmail] = UseInput(initialValue);
    const [password, updatepassword, resetPassword] = UseInput(initialValue);

    return (
        <>
            <h1>Email is: {email} & Password is: {password}</h1>
            <input onChange={updateEmail} type="email" value={email} />
            <input onChange={updatepassword} type="password" value={password} />
            <button onClick={resetEmail}>Submit</button>
            <button onClick={resetPassword}>Submit</button>

        </>
    );
};

export default InputField;