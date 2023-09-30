import React, { useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Button from "../../UI/Button";
import ProductsPage from "../../Product/ProductsPage";
import LoginForm from "../../../screens/LoginForm";
import Products from "../../Product/Products";
import Home from "../../../screens/Home";
import AuthContext from "../../../store/AuthContext/auth-context";

const Cart = React.lazy(() => import("../../Cart/Cart"));
const ContactUs = React.lazy(() => import("../../../screens/ContactUs"));
const About = React.lazy(() => import("../../../screens/About"));

const MainNavigation = () => {
    const [isCartOpen, setCartOpen] = useState(false);
    const authctx = useContext(AuthContext);
    const isToken = localStorage.getItem('token');
    const closeHandler = () => {
        setCartOpen(false);
    };
    const openHandler = () => {
        setCartOpen(true);
    };

    return (
        <React.Fragment>
            <Header onOpen={openHandler} />
            {isCartOpen && <Cart onClose={closeHandler} />}
            <Switch>
                <Route path="/product-detail/:id">
                    <ProductsPage />
                </Route>
                <Route path="/contact" exact>
                    <ContactUs />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
                {isToken === null && <Route path="/login" exact>
                    <LoginForm />
                </Route>}
                {isToken != null && <Route path="/store">
                    <main>
                        <Products />
                    </main>
                    <Button onClick={openHandler} className="cart">
                        See the Cart
                    </Button>
                </Route>}
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
            <Footer />
        </React.Fragment>)
}

export default MainNavigation;