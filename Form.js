import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefualt();

        const newUser = {firstName, lastName, email, password, confirmPassword};
            console.log("Welcome", newUser);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
    };

    return (
        <div>
            <form onSubmit={ createUser }>
                <div className='inputs'>
                    <label>First Name: </label>
                    <input type="text" value ={ firstName } onChange = { (e) => setFirstName(e.target.value)}/>
                </div>

                <div className='inputs'>
                    <label>Last Name: </label>
                    <input type="text" value ={ lastName } onChange = { (e) => setLastName(e.target.value)}/>
                </div>

                <div className='inputs'>
                    <label>Email Address: </label> 
                    <input type="text" value = { email } onChange={ (e) => setEmail(e.target.value) } />
                </div>

                <div className='inputs'>
                    <label>Password: </label>
                    <input type="text" value = {password} onChange={ (e) => setPassword(e.target.value) } />
                </div>

                <div className='inputs'>
                    <label>Confirm Password: </label>
                    <input type="text" value = {confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
            </form>

            {/* <div className='outputs'>
                <h2>Your Form Data:</h2>
                <p><label>First Name: </label>{ firstName }</p>
                <p><label>Last Name: </label>{ lastName }</p>
                <p><label>Email: </label> { email }</p>
                <p><label>Password: </label> { password }</p>
                <p><label>Confirm Password: </label>{ confirmPassword }</p>
            </div> */}
        </div>
    );

};

export default Form;