import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="tours">
      <button className="btn btn-album">Get Our Latest Album</button>
      <button className="btn btn-play">►</button>
      <h2>Tours</h2>
      <div>
        <div className="tour-item">
          <span className="tour-date">JUL16</span>
          <span className="tour-place">DETROIT, MI</span>
          <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
          <button className="btn btn-buy">BUY TICKETS</button>
        </div>
        <hr />
        <div className="tour-item">
          <span className="tour-date">JUL16</span>
          <span className="tour-place">DETROIT, MI</span>
          <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
          <button className="btn btn-buy">BUY TICKETS</button>
        </div>
        <hr />
        <div className="tour-item">
          <span className="tour-date">JUL16</span>
          <span className="tour-place">DETROIT, MI</span>
          <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
          <button className="btn btn-buy">BUY TICKETS</button>
        </div>
        <hr />
        <div className="tour-item">
          <span className="tour-date">JUL16</span>
          <span className="tour-place">DETROIT, MI</span>
          <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
          <button className="btn btn-buy">BUY TICKETS</button>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Home;
