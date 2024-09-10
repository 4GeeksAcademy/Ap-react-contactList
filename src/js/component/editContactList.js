import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../store/appContext';


const EditContact = () => {
    const { store, actions } = useContext(Context);
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        const contactToEdit = store.contacts.contacts.find(contact => contact.id === parseInt(id));
        if (contactToEdit) {
            setContactData(contactToEdit);
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    };

    const handleSubmit = () => {
        if (contactData.name && contactData.email && contactData.phone) {
            actions.editContacts(id, contactData);
            navigate('/');
        } else {
            alert("Please fill in all required fields.");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Edit Contact</h2>
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
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditContact;