import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { db } from './config/firebase';
import { useEffect } from 'react';

const User = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userList, setUserList] = useState([]);
    const getUsers = async () => {
        let userCollection = await collection(db, "users")
        let userdata = await getDocs(userCollection)
        let users = []
        userdata.docs.map((doc) => {
            // console.log(doc.id, doc.data());
            let data = doc.data();
            users.push({ ...data, id: doc.id })

        })

        setUserList(users)

    }

    const createUser = async (data) => {
        let userCollection = await collection(db, "users")
        let user = await addDoc(userCollection, data)
        console.log("User created", user);
        alert("User created")

    }
    useEffect(() => {
        getUsers()
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        let user = {
            email: email,
            password: password,
            timestamp: Date.now()
        }
        createUser(user)
    }

    const handleDelete = async (id) => {
        let userref = await doc(db, 'users', id)
        await deleteDoc(userref)
        getUsers()
    }

    const updateUser = async (id) => {
        let userref = await doc(db, 'users', id)
        await updateDoc(userref, { email: email })
        getUsers()
    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">create </button>
            </form>
            <hr />
            {
                userList.map((user) => {
                    return (
                        <div key={user.id}>
                            <h2>{user.email}</h2>
                            <p>{user.password}</p>
                            <p>{new Date(user.timestamp).toLocaleString()}</p>
                            <button onClick={() => handleDelete(user.id)}>delete</button>
                            <button onClick={() => updateUser(user.id)}>update</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default User