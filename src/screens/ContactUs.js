import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/UI/Button";
import "./ContactUs.css";

const ContactUs = () => {
  const history = useHistory();
  async function formHandler(e) {
    e.preventDefault();
    const queryObj = {
      name: e.target[0].value,
      email: e.target[1].value,
      Phone: e.target[2].value,
      desc: e.target[3].value,
    };
    // console.log(queryObj);
    try {
      const response = await fetch(
        "https://ecommerce-d2-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(queryObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong!!");
      }
      else {
        window.alert("Query Registered!");
        history.replace("/home");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <form className="form" onSubmit={formHandler}>
      <h3>Having dobuts? Feel free to contact us:</h3>
      <label htmlFor="name">Name : </label>
      <input type="text" name="name" placeholder="Enter your name" required />
      <label htmlFor="email">EmailId : </label>
      <input type="email" name="email" placeholder="Enter your email" required />
      <label htmlFor="Phno">Phone no:</label>
      <input type="tel" name="phone" placeholder="Enter your phone number" required />
      <label htmlFor="query">Description:</label>
      <input type="text" name="query" placeholder="Enter your query description" required />
      <Button className="btn btn-submit">Submit</Button>
    </form>
  );
};

export default ContactUs;
