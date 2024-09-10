import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import "../../styles/index.css"


const ContactCard = ({contact})=> {
    const {actions}= useContext(Context);

    const handleDelete = ()=> {
        actions.deleteContact(contact.id);

    };

    return (
        <div className='contact-card'>
            <h3>{contact.name}</h3>
            <p>Email:{contact.email}</p>
            <p>Phone:{contact.phone}</p>
            <p>Address:{contact.address}</p>
            <Link to={`/edit-contacts/${contact.id}`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ContactCard; 