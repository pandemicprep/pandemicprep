/** @format */

import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	NavLink,
	useHistory,
} from 'react-router-dom';

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
} from './index';

import { getPromotedProducts } from '../api/products';
import { getUserFromToken } from '../api/users';

import './App.css';

const App = () => {
  	const [user, setUser] = useState({ firstName: 'Guest', isAdmin: false, isUser: false, token: '' });
    const [products, setProducts] = useState([]);
    const [promotedProducts, setPromotedProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [searchObject, setSearchObject] = useState('');
    const [category, setCategory] = useState('');    // const history = useHistory();
    const [pageType, setPageType] = useState('');
      const [view, setView] = useState('');
      


	useEffect(() => {
		getPromotedProducts()
            .then((response) => {
                setPromotedProducts(response)
                setProducts(response)
            })
            .catch((error) => {
                console.error(error)
            });
		if (localStorage.getItem('panprepToken')) {
			getUserFromToken(localStorage.getItem('panprepToken'))
				.then((response) => {
                    console.log('the updated user on load is ', response);
					setUser(response);
					
				})
				.catch((error) => {
					console.error(error);
				});
        }
       
	}, []);


	return (
		<Router>
			<div className='App'>
				<Header
					products={products}
					setProducts={setProducts}
					searchObject={searchObject}
					setSearchObject={setSearchObject}
					useHistory={useHistory}
					NavLink={NavLink}
					setView={setView}
                    promotedProducts={promotedProducts}
				/>
				<Switch>
					<Route exact path='/'>
						<Productlist
							products={products}
							setProducts={setProducts}
							setProduct={setProduct}
							NavLink={NavLink}
                            searchObject={searchObject} 
                            category={category}
						/>
						<Categories setProducts={setProducts} NavLink={NavLink} setCategory={setCategory}/>
					</Route>
					<Route path='/register'>
						<Profile view={view} setUser={setUser} useHistory={useHistory} />
					</Route>
					<Route path='/login'>
						<Profile view={view} setUser={setUser} useHistory={useHistory} />
					</Route>
					<Route path='/guest'>
						<Profile view={view} useHistory={useHistory} />
					</Route>
					<Route path='/edit-user' setUser={setUser}>
						<Profile
							view={view}
							setView={setView}
							user={user}
							useHistory={useHistory}
						/>
					</Route>
					<Route path='/product'>
						<Product product={product} setProduct={setProduct} />
						<Categories setProducts={setProducts} NavLink={NavLink} setCategory={setCategory}/>
					</Route>
					<Route path='/cart'>
						<Cart user={user} />
					</Route>
					<Route path='/orders'>
						<Orders user={user} />
					</Route>
					<Route path='/user-list'>
						<Userlist user={user} />
					</Route>
					<Route path='/sales'>
						<Sales user={user} />
					</Route>
					<Redirect to='/' />
				</Switch>
				<Footer />
			</div>
		</Router>
	);

    return (
        <Router>
        <div className="App">
            <Header products={products} setProducts={setProducts}
            searchObject={searchObject} setSearchObject={setSearchObject} useHistory={useHistory} 
            NavLink={NavLink} promotedProducts={promotedProducts} setPageType={setPageType} />
            <Switch>
                <Route exact path='/' >
                        <Productlist products={products} setProducts={setProducts} setProduct={setProduct} NavLink={NavLink} 
                        searchObject={searchObject} category={category} pageType={pageType} setPageType={setPageType} />
                        <Categories setProducts={setProducts} NavLink={NavLink} setCategory={setCategory} setPageType={setPageType}/>
                    </Route>
                    <Route path='/register'>
                        <Profile view='register'/>
                    </Route>
                    <Route path='/login' render={() => 
                        <Profile view='login' />
                    } >
                    </Route>
                    <Route path='/guest'>
                        <Profile view='guest' />
                    </Route>
                    <Route path='/edit-user'>
                        <Profile view='edit' />
                    </Route>
                    <Route path='/product' >
                        <Product product={product} setProduct={setProduct} />
                        <Categories setProducts={setProducts} NavLink={NavLink} setCategory={setCategory} setPageType={setPageType}/>
                    </Route>
                    <Route path='/cart' >
                        <Cart />
                    </Route>
                    <Route path='/orders' >
                        <Orders />
                    </Route>
                    <Route path='/user-list' >
                        <Userlist />
                    </Route>
                    <Route path='/sales' >
                        <Sales />
                    </Route>
                    <Redirect to='/' />
                </Switch>
            <Footer />
        </div>
        </Router>
    );

};

export default App;
