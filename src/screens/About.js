import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <h1>About</h1>
      <p>
        This is a Ecommerce website based on React. One of my progress its in progress and
        will try add more features implementing different concepts of Reactjs. ReactJs is
        the latest technology in web development.
      </p>
      <p>
        ReactJs is javascript framework developed by Facebook, Inc. react-js is a
        Javascript library for building user interfaces without writing any server side
        code. It works well with HTML and CSS. ReactJS is a JavaScript library designed to
        speed up web app development by providing a declarative alternative to traditional
        imperative programming. It provides a set of tools for building UI components that
        combine data and state using immutable data structures. Using these components,
        you build views layer by layer instead of directly manipulating the DOM. The core
        idea behind ReactJS is to create UI components that encapsulate their behavior and
        presentation. These components are reusable and testable.
      </p>
      <p>
        It’s easy to maintain them over time. You don’t need to worry about how they look
        on different browsers or devices. You can easily scale ReactJS applications across
        many servers. It’s fully compatible with the existing tooling like Webpack and
        Babel.
      </p>
    </div>
  );
};

export default About;
