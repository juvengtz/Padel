import React, { useState} from "react";
import axios from "axios";

/**
 * Renders a registration form component.
 * @param {Object} props - The component props.
 * @returns {JSX.Element} The rendered registration form.
 */
function Register(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const register = () => {
        axios.post("http://localhost:3001/register", {
            email: email,
            password: password,
            name: name,
        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                alert(response.data.message);
            } else {
                props.history.push("/login");
            }
        });
    };

    return(
        <div>
            <h1>Register</h1>
            <input
                type="text"
                placeholder="Name..."
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
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
            <button onClick={register}>Register</button>
        </div>
    );
}