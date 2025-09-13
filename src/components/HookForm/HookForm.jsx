import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField("");
    const [email, emailOnChange] = useInputField("");
    const [password, passwordOnChange] = useInputField("");

    const handleSubmit = e => {
        e.preventDefault();
        // console.log("Submit", name, email);
        console.log(name, email, password);
    }

    return (
        <div>
            <h3>This is Hook Form</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} name="name" placeholder="Your Name" />
                <br />
                <input type="email" onChange={emailOnChange} name="" placeholder="Enter Your Email" />
                <br />
                <input type="password" onChange={passwordOnChange} name="" placeholder="Enter Your Password" />
                <br />
                <input type="submit" value="Submit Now!" />
            </form>
        </div>
    );
};

export default HookForm;