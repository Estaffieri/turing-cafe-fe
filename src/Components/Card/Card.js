import React from "react";
import "./Card.css"

const Card = ({reservation}) => {
    return(
        <section key={reservation.id} className="card">
            <h3 >{reservation.name}</h3>
            <p>{reservation.date}</p>
            <p>{reservation.time}</p>
            <p>Number of guests:{reservation.number}</p>
        </section>
    )
}

export default Card;

