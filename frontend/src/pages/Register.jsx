import axios from "../services/api";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const register = async () => {

        await axios.post("/register", {
            nom: nom,
            prenom: prenom,
            email: email,
            password: password
        });

        alert("Utilisateur créé");
        navigate("/login");
    };

    return (
        <>
            <form>
                <input type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
                <input type="text" placeholder="Prénom" onChange={(e) => setPrenom(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
            </form>
            <button onClick={register}>
                Register
            </button>
        </>
    );
}


export default Register;