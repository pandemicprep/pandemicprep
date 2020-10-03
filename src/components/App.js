/** @format */

import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    NavLink,
    useHistory,
} from "react-router-dom";

import {
    Header,
    Footer,
    Categories,
    Productlist,
    Profile,
    Cart,
    Product,
    Orders,
    Userlist,
    Sales,
    PageIndex,
    Admin,
    Promoted,
} from "./index";

import { getPromotedProducts } from "../api/products";
import { getUserFromToken } from "../api/users";

import "./App.css";

const App = () => {
    const [user, setUser] = useState({
        id: 0,
        firstName: "Guest",
        isAdmin: false,
        isUser: false,
        token: "",
    });
    const [cart, setCart] = useState({ items: [] });
    const [cartSize, setCartSize] = useState(0);
    const [products, setProducts] = useState([]);
    const [promotedProducts, setPromotedProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [searchObject, setSearchObject] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const [category, setCategory] = useState(""); // const history = useHistory();
    const [pageType, setPageType] = useState("");
    const [view, setView] = useState("");
    const history = useHistory();

    useEffect(() => {
        getPromotedProducts()
            .then((response) => {
                setPromotedProducts(response);
                setProducts(response);
            })
            .catch((error) => {
                console.error(error);
            });
        if (localStorage.getItem("panprepToken")) {
            getUserFromToken(localStorage.getItem("panprepToken"))
                .then((response) => {
                    setUser({
                        id: response.id,
                        firstName: response.firstName,
                        isAdmin: response.isAdmin,
                        isUser: response.isUser,
                        token: response.token,
                    });
                    setCart(response.activeCart);
                    setCartSize(response.activeCart.items.length);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

    return (
        <Router>
            <div className="App">
                <Header
                    products={products}
                    setProducts={setProducts}
                    searchObject={searchObject}
                    setSearchObject={setSearchObject}
                    useHistory={useHistory}
                    NavLink={NavLink}
                    promotedProducts={promotedProducts}
                    setPageType={setPageType}
                    setSearchTerm={setSearchTerm}
                    setView={setView}
                    user={user}
                    setUser={setUser}
                    cartSize={cartSize}
                />
                <Switch>
                    <Route exact path="/">
                        {/* <div id="products-with-page"> */}
                        <Promoted />
                        <Categories
                            setProducts={setProducts}
                            NavLink={NavLink}
                            setCategory={setCategory}
                            setPageType={setPageType}
                            setSearchObject={setSearchObject}
                            useHistory={useHistory}
                        />
                    </Route>
                    <Route path="/productsview">
                        <div id="products-with-page">
                            <Productlist
                                products={products}
                                setProducts={setProducts}
                                setProduct={setProduct}
                                NavLink={NavLink}
                                searchObject={searchObject}
                                category={category}
                                pageType={pageType}
                                setPageType={setPageType}
                            />
                            <PageIndex
                                searchObject={searchObject}
                                pageType={pageType}
                                setPageType={setPageType}
                                setProducts={setProducts}
                                products={products}
                                category={category}
                                searchTerm={searchTerm}
                            />
                        </div>
                        <Categories
                            setProducts={setProducts}
                            NavLink={NavLink}
                            setCategory={setCategory}
                            setPageType={setPageType}
                            setSearchObject={setSearchObject}
                            useHisotry={useHistory}
                        />
                    </Route>
                    <Route path="/register">
                        <Profile
                            view="register"
                            useHistory={useHistory}
                            setView={setView}
                            setUser={setUser}
                            setCart={setCart}
                        />
                    </Route>
                    <Route path="/login">
                        <Profile
                            view="login"
                            useHistory={useHistory}
                            setView={setView}
                            setUser={setUser}
                            setCart={setCart}
                        />
                    </Route>
                    <Route path="/guest">
                        <Profile
                            view="guest"
                            useHistory={useHistory}
                            setView={setView}
                            setUser={setUser}
                            setCart={setCart}
                        />
                    </Route>
                    <Route path="/edit-user">
                        <Profile
                            view="edit"
                            useHistory={useHistory}
                            setView={setView}
                            setUser={setUser}
                            setCart={setCart}
                        />
                    </Route>
                    <Route path="/product">
                        <Product
                            product={product}
                            setCart={setCart}
                            cart={cart}
                            setCartSize={setCartSize}
                            user={user}
                        />
                        <Categories
                            setProducts={setProducts}
                            NavLink={NavLink}
                            setCategory={setCategory}
                            setPageType={setPageType}
                            setSearchObject={setSearchObject}
                            useHistory={useHistory}
                        />
                    </Route>
                    <Route path="/cart">
                        <Cart cart={cart} setCart={setCart} user={user} setCartSize={setCartSize} />
                    </Route>
                    <Route path="/orders">
                        <Orders />
                    </Route>
                    <Route path="/user-list">
                        <Userlist />
                    </Route>
                    <Route path="/sales">
                        <Sales />
                    </Route>
                    {user.isAdmin ? (
                        <Route path="/admin">
                            <Admin product={products} setProducts={setProducts} />
                        </Route>
                    ) : (
                        ""
                    )}
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
