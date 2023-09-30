import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/CartContext/cart-context";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import axios from "axios";
import "./Cart.css";
import "./CartItem.css";

const Cart = (props) => {
  let amount = 0;
  const ctxobj = useContext(CartContext);
  const [items, setItems] = useState([]);

  let username = localStorage.getItem("email");
  let t = "";
  for (let i = 0; i < username.length; i++) {
    if (username[i] === '.' || username[i] === '@') {
      continue;
    }
    else {
      t += username[i];
    }
  }
  username = t;

  useEffect(() => {
    axios.get(`https://crudcrud.com/api/0275100eb19b479a831efa1fa68c4039/${username}`)
      .then((res) => {
        setItems([...res.data]);
      })
      .catch(err => console.log(err))
  }, []);

  items.map((item) => {
    amount = amount + Number(item.quantity) * Number(item.price);
  });

  //Remove Handler
  const removeHandler = (item) => {
    axios.delete(`https://crudcrud.com/api/0275100eb19b479a831efa1fa68c4039/${username}/${item._id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
    ctxobj.removeItem(item);
  }

  const cartItems = (
    <ul className="cart-items">
      <li>
        <h4>ITEM</h4>
        <h4>PRICE</h4>
        <h4>QUANTITY</h4>
      </li>
      <hr />
      {items.map((item) => (
        <li key={Math.random() * 10}>
          <img src={item.imageUrl} alt={item.title} className="cart-img" />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>
            <b>{item.quantity}</b>
          </p>
          <Button className="btn-remove" onClick={removeHandler.bind(null, item)}>
            REMOVE
          </Button>
        </li>
      ))}
      <hr />
    </ul>
  );

  return (
    <Modal>
      <div>
        <h3>CART</h3>
        {cartItems}
      </div>
      <div className="total">
        <span>
          <b>Total </b>
        </span>
        <span>${amount}</span>
      </div>
      <Button onClick={props.onClose} className="btn btn-order">
        CLOSE
      </Button>
      <Button className="btn btn-order">PURCHASE</Button>
    </Modal>
  );
};

export default Cart;
