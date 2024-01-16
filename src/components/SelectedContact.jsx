import React from 'react';
import { useEffect, useState } from 'react';

const API_URL = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        let ignore = false;
        //get the list of contact information from the API
        async function fetchContact() {
            const response = await fetch(API_URL+  `/${selectedContactId}`);
            const json = await response.json();
            setContact(json);
        }
        fetchContact()
        return () => {
            ignore = true;
            console.log('dismounted')
        }
    }, []);

    if (!contact) {
        //exit button to return back to contactList
        return (
            <>
            <button onClick={() => back()}>Return To List</button>
            </>
        )
    }

    //on click display single more detailed contact info
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Contact Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{contact.name}</td>
                    </tr>
                    <tr>
                        <td>Username:</td>
                        <td>{contact.username}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{contact.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{contact.phone}</td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td>{contact.website}</td>
                    </tr>
                    <tr>
                        <td>Company:</td>
                        <td>{contact.company.name}</td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td>{contact.address.city}</td>
                    </tr>
                </tbody>
                
            </table>
            <button onClick={() => setSelectedContactId(null)}>Return To List</button>
        </div>
    )
    
}