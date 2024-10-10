import React from "react";
import Club from "./Club/Club";

const Home = () => {
  return (
    <>
      <div className="container-fluid top-image">
        <div className="text-center p-1 search-panel">
          <br className="user-select-none" />
          <br className="user-select-none" />
          <br className="user-select-none" />
          <h1>Over 75+ CLUB & BAR across India</h1>
        </div>
        <br className="user-select-none" />
        <br className="user-select-none" />
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide container"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1553696590-4b3f68898333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1553969420-fb915228af51?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h1 className="text-center p-5">PREMIUM CLUB & BAR</h1>
        <Club />
      </div>
    </>
  );
};

export default Home;
