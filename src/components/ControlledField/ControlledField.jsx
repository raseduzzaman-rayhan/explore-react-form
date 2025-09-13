import React, { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        else {
            setError('');
        }
    }

    const handleNameOnChane = (e) => {
        setName(e.target.value)
    }

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);

        // if (password.length < 6) {
        //     setError('Password must be 6 characters or longer')
        // }
        // else {
        //     setError('');
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameOnChane} defaultValue={name} name="name" placeholder="Enter Your Name" />
                <br />
                <input type="email" onChange={handleEmailOnChange} defaultValue={email} name="email" placeholder='Enter Your Email' required />
                <br />
                <input onChange={handlePasswordOnChange} type="password" name="password" placeholder='Enter Your Password' required />
                <br />
                <input type="submit" value="Submit Now!" />
            </form>
            <p>
                {error}
            </p>
        </div>
    );
};

export default ControlledField;