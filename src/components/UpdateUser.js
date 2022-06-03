import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/update-user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    // Update Information
    const handleNameChange = (e) => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: user.email, phone: user.phone };
        setUser(updatedUser);
    }

    const handleEmailChange = (e) => {
        const updatedEmail = e.target.value;
        const updatedUser = { name: user.name, email: updatedEmail, phone: user.phone };
        setUser(updatedUser);
    }

    const handlePhoneChange = (e) => {
        const updatedPhone = e.target.value;
        const updatedUser = { name: user.name, email: user.email, phone: updatedPhone };
        setUser(updatedUser);
    }

    // Update Total 
    const handleUpdateUser = (e) => {
        const url = `http://localhost:5000/update-user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully')
                    setUser({})
                }
            })
        e.preventDefault();
    }

    return (
        <div className=''>
            <h1 className="text-center mb-3">Update User</h1>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleUpdateUser} action="" className=''>
                    <input type="text" onChange={handleNameChange} value={user.name || ''} placeholder='Name' className='mt-3' />
                    <br />
                    <input type="email" onChange={handleEmailChange} value={user.email || ''} placeholder='Email Address' className='mt-3' />
                    <br />
                    <input type="number" onChange={handlePhoneChange} value={user.phone || ''} placeholder='Phone Number' className='mt-3' />
                    <br />
                    <input type="submit" value="Update" className='mt-3' />
                </form>
            </div>
            {/* <div className="d-flex justify-content-center">
                <div className="" >
                    <div className="mb-3" >
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control" 
                            onChange={handleNameChange} value={user.name || ''}
                        />
                    </div>
                    <br />
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={handleEmailChange} value={user.email || ''}
                        />
                    </div>
                    <br />
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone No.</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={handlePhoneChange} value={user.phone || ''}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary"
                        onSubmit={handleUpdateUser}
                    >Submit</button>
                </div>
            </div> */}
        </div>
    );
};

export default UpdateUser;