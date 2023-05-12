import React from "react";
import Star from "./Star";

export default function Contact(props) {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+996709424336",
        email: "kochaj@gmail.com",
        isFavorite: false
    })

    function toggleFavorite() {
        setContact(prevContact=>{
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }


    return (
        <div>
            <article className="card">
                <img src="../images/profile.png" className="card--image" alt="star"/>
                <div className="card--info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </div>
    )
}