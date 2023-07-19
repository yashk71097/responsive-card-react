import React from "react";
import "./Card.css";
// import image from "../assets/gym_girl.jpg";
import Button from "./Button";
import Data from "./data.json";

const Card = () => {
    return (
        <div className="cards-container">
            {Data.map((data) => {
                return (
                    <div className="card" key={data.id}>
                        <div className="card-image">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="card-description">
                            <h1 className="card-title">{data.title}</h1>
                            <p className="card-detail">{data.text}</p>
                            <Button />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
