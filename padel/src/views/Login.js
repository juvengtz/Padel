import React, {useState} from 'react';
import axios from 'axios';

/**
 * Renders a login component.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} The rendered login component.
 */
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                alert(response.data.message);
            } else {
                props.history.push("/home");
            }
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Email..."
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <input
                type="password"
                placeholder="Password..."
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <button onClick={login}>Login</button>
        </div>
    );
}