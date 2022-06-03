import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { AiFillEye } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { CgTrashEmpty } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Home = () => {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/users') 
            .then(res => {
                setContacts(res.data);
            })
    }, [])

    // DELETE an user
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingUsers = contacts.filter(contact => contact._id !== id)
                        setContacts(remainingUsers);
                    }
                })
        }
    }

    return (
        <div>
            <div className="mt-5">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts && contacts.map((contact, index) => {
                                    return <>
                                        <tr key={contact._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td className="d-flex justify-content-between">
                                                <Link to={`/update-user/${contact._id}`}><button className="btn btn-primary"><BsPencil /></button></Link>
                                                <button onClick={() => handleDelete(contact._id)} className="btn btn-danger"><CgTrashEmpty /></button>
                                            </td>
                                        </tr>
                                    </>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;