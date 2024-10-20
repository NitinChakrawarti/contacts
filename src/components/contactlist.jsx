import React from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri";
import Cardcontact from './cardcontact';
import { Link } from 'react-router-dom';
const Contactlist = (props) => {

    const deletecontact = (id) => {
        props.getcontactid(id)
    }

    return (
        <div>
            <h1 className="text-2xl font-bold flex justify-evenly">Contact List <Link to="/add" className="bg-blue-500 p-1 hover:bg-blue-700 text-white font-bold  rounded">Add Contact
            </Link></h1>
            <div className="pt-10">

                <div className="mt-10">
                    {
                        props.contacts.map((contact, index) => (
                            <Cardcontact contact={contact} key={index} clickid={deletecontact} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Contactlist;
