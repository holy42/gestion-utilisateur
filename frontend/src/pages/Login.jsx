import axios from "../services/api";
import { useState } from "react";
import React from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

        await axios.post("/login", {
            email: email,
            password: password
        });

        alert("Utilisateur connecté");
    };

    return (
        <>
            <form>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
            </form>
            <button onClick={login}>
                Login
            </button>
        </>
    );
}


export default Login;