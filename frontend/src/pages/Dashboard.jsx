import axios from "../services/api";
import { useState } from "react";
import React from "react";

function Dashboard() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {

        const response = await axios.get("/users");
        setUsers(response.data);

    };

    useEffect(() => {
        fetchUsers();
    }, []);
    

    return (
        <>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Dashboard;