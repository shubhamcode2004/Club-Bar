import React, { Component } from "react";
import Popup from "reactjs-popup";
import "../Club/Club.css";
import "reactjs-popup/dist/index.css";

export default class Club extends Component {
  render() {
    const cards = [
          {
            id: 1,
            title: "CLUB 01",
            description: "This is Pune",
            image: "https://via.placeholder.com/300x200",
            content: "Content on CLUB 01",
          },
          {
            id: 2,
            title: "CLUB 02",
            description: "This is Pune",
            image: "https://via.placeholder.com/300x200",
            content: "Content on CLUB 02",
          },
          {
            id: 3,
            title: "CLUB 03",
            description: "This is Pune",
            image: "https://via.placeholder.com/300x200",
            content: "Content on CLUB 03",
          },
    ];
    return (
      <div>
        <section className="card-section">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <Popup
                trigger={
                  <div className="card-head">
                    <img src={card.image} alt={card.title} />
                    <h2>{card.title}</h2>
                  </div>
                }
                modal
                nested
              >
                <div className="content">
                  <h4>{card.title}</h4>
                  <img className="p-1" src={card.image} alt={card.title} />
                  <img className="p-1" src={card.image} alt={card.title} />
                  <h6>{card.content}</h6>
                </div>
              </Popup>
              <p>{card.description}</p>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
