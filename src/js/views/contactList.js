import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import ContactCard from '../component/contactCard';
import "../../styles/index.css"

const ContactList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (!store.contacts || !store.contacts.contacts || store.contacts.contacts.length === 0) {
            console.log("Fetching contacts...");
            actions.getContacts();
        }
    }, []);

    console.log("Current store state:", store);

    if (store.contacts?.error) {
        return <p>Error: {store.contacts.error}</p>;
    }

    if (!store.contacts || !store.contacts.contacts || !Array.isArray(store.contacts.contacts)) {
        return <p>Loading contacts...</p>;
    }

    return (
        <div className="container">
            <h2>Contact List</h2>
            <Link to="/add-contact">
                <button className="add-contact-button">Add New Contact</button>
            </Link>

            <div className="contact-list">
                {store.contacts.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;
