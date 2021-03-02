import React, { useEffect, useRef } from 'react';
import { Route, Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Badge, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';
import logo from '../skylineshop.svg';
import { getAllCart } from '../actions/cartActions';
import '../css/header.css';

const Header = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openSearchDesktop, setOpenSearchDesktop] = React.useState(false);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

   const cartQty = cartItems.reduce((a, b) => {
      return a + b.qty;
    }, 0);

    const openSearchFunction = (value) => {
      setOpenSearch(value);

      // .transform {
      //   -webkit-transition: all 2s ease;  
      //   -moz-transition: all 2s ease;  
      //   -o-transition: all 2s ease;  
      //   -ms-transition: all 2s ease;  
      //   transition: all 2s ease;
      // }
      if (value === true) {
        searchDiv.current.style.width = '100%';
        searchDiv.current.style.top = '7px';
        siteHeader.current.style.height = '5rem';
        searchNav.current.style.marginRight = '1rem';
      } else {
        siteHeader.current.style.height = 'auto';
        searchDiv.current.style.width = '';
        searchDiv.current.style.top = '15px';
        searchNav.current.style.marginRight = 'auto';
      }
    };

    const openSearchDesktopFunction = (value) => {
      setOpenSearchDesktop(value);

      if (value === true) {
        headerLinks.current.style.marginRight = '-23rem';
      } else {
        headerLinks.current.style.marginLeft = 'auto';
        headerLinks.current.style.marginRight = 'inherit';
      }
    };

  const logoutHandler = () => {
    dispatch(logout());
  }

  const searchDiv = useRef();
  const siteHeader = useRef();
  const headerLinks = useRef();
  const searchNav = useRef();

    return (
      <>
        <div className='notification-bar'>
          <span className='notification-bar_message'>
            Free Shipping & Free Returns
          </span>
        </div>
        <header ref={siteHeader} className='site-header'>
          <div>
            <Navbar className='navbar' expand='lg'>
              {!openSearch && (
                <Navbar.Brand as={RouterLink} to='/'>
                  <img src={logo} alt='SkylineShop' height='80' width='200' />
                </Navbar.Brand>
              )}
              {!openSearch && (
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
              )}
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav ref={headerLinks} className='header-links'>
                  <Nav.Link className='links_text' as={RouterLink} to='/'>
                    Home
                  </Nav.Link>
                  <Nav.Link className='links_text' href='#shop'>
                    Shop
                  </Nav.Link>
                  <Nav.Link className='links_text' as={RouterLink} to='/blog'>
                    Blog
                  </Nav.Link>
                </Nav>
                {userInfo ? (
                  <Nav className='header-links'>
                    {openSearchDesktop ? (
                      <Nav.Link className='d-none d-lg-block d-xxl-none search_link'>
                        <div class='form-group-span'>
                          <Route
                            render={({ history }) => (
                              <SearchBox history={history} />
                            )}
                          />
                          <i
                            class='fas fa-times'
                            onClick={() => openSearchDesktopFunction(false)}
                          ></i>
                        </div>
                      </Nav.Link>
                    ) : (
                      <Nav.Link className='d-none d-lg-block d-xxl-none search_link'>
                        <div class='form-group-span'>
                          <i
                            class='fas fa-search search'
                            onClick={() => openSearchDesktopFunction(true)}
                          ></i>
                        </div>
                      </Nav.Link>
                    )}
                    <NavDropdown
                      title={userInfo.name}
                      className='links_icons'
                      id='basic-nav-dropdown'
                    >
                      <LinkContainer to='/profile'>
                        <NavDropdown.Item className='links_text'>
                          Profile
                        </NavDropdown.Item>
                      </LinkContainer>
                      {userInfo && userInfo.isAdmin && (
                        <>
                          <LinkContainer to='/admin/userlist'>
                            <NavDropdown.Item className='links_text'>
                              Users
                            </NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to='/admin/productlist'>
                            <NavDropdown.Item className='links_text'>
                              Products
                            </NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to='/admin/orderlist'>
                            <NavDropdown.Item className='links_text'>
                              Orders
                            </NavDropdown.Item>
                          </LinkContainer>
                          <LinkContainer to='/admin/bloglist'>
                            <NavDropdown.Item className='links_text'>
                              Blogs 
                            </NavDropdown.Item>
                          </LinkContainer>
                        </>
                      )}
                      <NavDropdown.Item
                        className='links_text'
                        onClick={logoutHandler}
                      >
                        Log Out
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                ) : (
                  <Nav className='header-links'>
                    <Nav.Link
                      className='links_icons'
                      as={RouterLink}
                      to='/login'
                    >
                      Log In
                    </Nav.Link>
                  </Nav>
                )}
                <Nav.Link className='links_icons' as={RouterLink} to='/cart'>
                  <span>
                    <i class='fas fa-shopping-cart'></i>
                    <Badge pill variant='danger'>
                      {cartQty}
                    </Badge>
                  </span>
                </Nav.Link>
              </Navbar.Collapse>
              <Nav ref={searchDiv} className='search_div'>
                <Nav.Link ref={searchNav} className='search_nav'>
                  {openSearch ? (
                    <div className='search_link'>
                      <Route
                        render={({ history }) => (
                          <SearchBox history={history} />
                        )}
                      />
                      <i
                        class='fas fa-times'
                        onClick={() => openSearchFunction(false)}
                      ></i>
                    </div>
                  ) : (
                    <div class='search_icon_mobile'>
                      <i
                        class='fas fa-search'
                        onClick={() => openSearchFunction(true)}
                      ></i>
                    </div>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
        </header>
      </>
    );
}

export default Header;
