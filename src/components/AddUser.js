import axios from 'axios';
import React, { useState } from 'react';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);

    const addNewUser = (e) => {
        e.preventDefault();  
        axios.post('http://localhost:5000/add-user', { name, email, phone })
            .then(res => {
                if (res.status) {
                    alert('User Added Successfully')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="" >
                <div className="mb-3" >
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <br />
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control" id="exampleFormControlInput1" placeholder="Enter your email address"
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <br />
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Phone No.</label>
                    <input
                        type="number"
                        className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number"
                        onChange={(e) => { setPhone(e.target.value) }}
                    />
                </div>
                <button type="submit" class="btn btn-primary"
                    onClick={addNewUser}
                >Submit</button>
            </div>
        </div>
    );
};

export default AddUser;