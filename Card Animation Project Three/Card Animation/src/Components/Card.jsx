import React, { useEffect, useState } from "react";
import vanillaTilt from 'vanilla-tilt';

function Card(props) {
  
  useEffect(() => {
    vanillaTilt.init(document.querySelectorAll('.card-item-wrapper'), {
      max: 15,
      speed: 1500,
    });
  }, []);

  return (
    <div
      className="card-item-wrapper"
      data-tilt-reverse="true"
    >
      <div className="card-content">
        <div className="card-title">{props.item.title}</div>
        <div className="card-details">{props.item.details}</div>
        <div className="card-img">
          <img src={props.item.img} alt="" />
        </div>
        <div className={`card-button buttonNo${props.item.id}`}>
          {props.item.btnText}
        </div>
      </div>
    </div>
  );
}

export default Card;
