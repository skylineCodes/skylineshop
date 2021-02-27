import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import BlogScreen from './screens/BlogScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import ProductListScreen from './screens/ProductListScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import UserEditScreen from './screens/UserEditScreen';
import SearchScreen from './screens/SearchScreen';
import BlogDetailsScreen from './screens/BlogDetailsScreen';
import BlogListScreen from './screens/BlogListScreen';
import BlogCreateScreen from './screens/BlogCreateScreen';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container fluid>
            <Route exact path='/blog' component={BlogScreen} />
            <Route path='/blog/:id' component={BlogDetailsScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route
              exact
              path='/admin/productlist'
              component={ProductListScreen}
            />
            <Route exact path='/admin/bloglist' component={BlogListScreen} />
            <Route path='/admin/blog/create' component={BlogCreateScreen} />
            <Route
              exact
              path='/admin/bloglist/:page'
              component={BlogListScreen}
            />
            <Route
              exact
              path='/admin/productlist/:page'
              component={ProductListScreen}
            />
            <Route path='/admin/orderlist' component={OrderListScreen} />
            <Route
              path='/admin/product/:id/edit'
              component={ProductEditScreen}
            />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route exact path='/search/:keyword' component={SearchScreen} />
            <Route exact path='/page/:page' component={HomeScreen} />
            <Route
              exact
              path='/search/:keyword/page/:page'
              component={SearchScreen}
            />
            <Route exact path='/' component={HomeScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
