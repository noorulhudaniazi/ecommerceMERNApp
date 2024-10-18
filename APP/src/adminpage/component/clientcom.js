import React from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Clientcom(props) {
    const host = "http://localhost:2000";

    const handleDelClick = async() =>{
        const response = await fetch(`${host}/client/delclient/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = response.json();
        if (response) {
            alert("promise is fulfilled" + json)
        }
    }
    const handleEditClick = () =>{
        alert("Edit is not Available now")
    }
    return (
        <div className="clientsection row" key={props.id}>
            <div className="clientinfo">
                <h4>Name:  &emsp; {props.name}</h4>
                <p>Email: &emsp; {props.email}</p>
                <p>Phone Number : &emsp; {props.contact}</p>
                <p>Address : &emsp; {props.address}</p>
                <p>Country : &emsp; {props.city}</p>
                <p>Country : &emsp; {props.country}</p>
                <p>Orders:</p>
            </div>
            <div className="clientButtons">
                    <div className='clientfabtn'><FontAwesomeIcon icon={faEdit} onClick={handleEditClick} /></div>
                    <div className='clientfabtn'><FontAwesomeIcon icon={faTrash} onClick={handleDelClick} /></div>
            </div>
        </div>
    );
}

export default Clientcom;