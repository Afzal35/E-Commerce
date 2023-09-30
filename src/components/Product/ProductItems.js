import React, { useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/CartContext/cart-context";
import Button from "../UI/Button";
import "./ProductItems.css";

const ProductItems = (props) => {
  const ctxobj = useContext(CartContext);
  let username = localStorage.getItem("email") ?? "";
  let t = "";
  for (let i = 0; i < username.length; i++) {
    if (username[i] == '.' || username[i] == '@') {
      continue;
    }
    else {
      t += username[i];
    }
  }
  username = t;

  const addHandler = () => {
    if (username == "") {
      window.alert("Please login first");
    }
    axios.post(`https://crudcrud.com/api/0275100eb19b479a831efa1fa68c4039/${username}`, {
      ...props.item, quantity: 1
    })
      .then((res) => ctxobj.addItem(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <ul className="product-items" id={props.id}>
      <li>
        <h3>{props.item.title}</h3>
      </li>
      <li>
        <img src={props.item.imageUrl} />
      </li>
      <li>
        <h4>${props.item.price}</h4>
      </li>
      <li>
        <Button className="btn-purchase" onClick={addHandler}>
          Add to Cart
        </Button>
        <Button>
          <NavLink state={props.item} className="btn-checkout" to={`/product-detail/${props.id}`}>
            Check product
          </NavLink>
        </Button>
      </li>
    </ul >
  );
};

export default ProductItems;
