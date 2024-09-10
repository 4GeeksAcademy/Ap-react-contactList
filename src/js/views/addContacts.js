import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import "../../styles/index.css"

const AddContact = () => {
    const { actions } = useContext(Context);
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    };

    const handleSubmit = () => {
        actions.addContacts(contactData);
        navigate('/');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Add New Contact</h2>
                <input
                    type="text"
                    name="name"
                    value={contactData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                />
                <input
                    type="email"
                    name="email"
                    value={contactData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="phone"
                    value={contactData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />
                <input
                    type="text"
                    name="address"
                    value={contactData.address}
                    onChange={handleChange}
                    placeholder="Address"
                />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
};

export default AddContact;