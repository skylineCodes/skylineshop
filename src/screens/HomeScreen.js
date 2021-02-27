import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, Tabs, Tab } from 'react-bootstrap';
import Collection from '../components/Collection';
import Product from '../components/Product';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import Meta from '../components/Meta.js';
import ProductCarousel from '../components/ProductCarousel.js';
import { listProducts } from '../actions/productActions';
import '../css/home.css';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const page = match.params.page || 1;

  const pageSize = 4;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, page, pageSize));
  }, [dispatch, keyword, page]);

  return (
    <div>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          <i class='fas fa-arrow-left'></i> Go Back
        </Link>
      )}
      <div className='gap-element'></div>
      <section className='collection-section'>
        <Row>
          <Collection />
        </Row>
      </section>
      <div className='gap-element'></div>
      <section className='new-arrivals-section'>
        <div className='new-arrrivals-header'>
          <h1>New Arrivals</h1>
        </div>
        <div className='is-divider'></div>
        <div className='new-arrivals-gap-element'></div>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row className='new-arrivals-products-card'>
              {products.map((product) => (
                <Col
                  key={product._id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  xs={12}
                  className='new-arrivals-product-column'
                >
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </section>
      <div className='gap-element'></div>
      <section className='offer-section'>
        <div className='offer-header'>
          <h1>What we can offer you</h1>
        </div>
        <div className='is-divider'></div>
        <div className='offer-gap-element'></div>
        <Row>
          <Col xs={12} sm={12} lg={4} className='icon-box-center'>
            <div className='offer-image-div'>
              <Image
                src='../images/delivery-icon.png'
                alt='delivery-icon'
                className='offer-image-1'
                fluid
              />
            </div>
            <h2>Swift Delivery</h2>
            <p>
              Ut eu fringilla lacus, vel viverra nulla. Aenean volutpat tortor
              nec malesuada eleifend.
            </p>
          </Col>
          <Col xs={12} sm={12} lg={4} className='icon-box-center'>
            <div className='offer-image-div'>
              <Image
                src='../images/customer-service-icon.png'
                alt='customer-service-icon'
                className='offer-image-2'
                fluid
              />
            </div>
            <h2>Customer Service</h2>
            <p>
              Ut eu fringilla lacus, vel viverra nulla. Aenean volutpat tortor
              nec malesuada eleifend.
            </p>
          </Col>
          <Col xs={12} sm={12} lg={4} className='icon-box-center'>
            <div className='offer-image-div'>
              <Image
                src='../images/satisfaction-icon.png'
                alt='satisfaction-icon'
                className='offer-image-3'
                fluid
              />
            </div>
            <h2>Guaranteed Satisfaction</h2>
            <p>
              Ut eu fringilla lacus, vel viverra nulla. Aenean volutpat tortor
              nec malesuada eleifend.
            </p>
          </Col>
        </Row>
      </section>
      <div className='gap-element'></div>
      <section className='offer-section'>
        <div className='offer-header'>
          <h1>How It works</h1>
        </div>
        <div className='is-divider'></div>
        <div className='offer-gap-element'></div>
        <Row className='d-sm-block d-lg-none tab-column'>
          <Col>
            <Tabs
              className='tabs-card'
              defaultActiveKey='process'
              id='uncontrolled-tab-example'
            >
              <Tab className='' eventKey='process' title='Process Order'>
                <h2>Have You Completed Your Order</h2>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Quisque ut interdum lectus.
                  Aliquam gravida porttitor lorem at luctus.
                </p>
              </Tab>
              <Tab className='' eventKey='payment' title='Make Payment'>
                <h2>Complete Your Order By Making Payment</h2>
                <p>
                  Etiam congue magna in vehicula accumsan. Maecenas et velit
                  feugiat, posuere magna ut, pharetra libero. Pellentesque
                  sagittis neque sit amet turpis consectetur, et consectetur
                  ante convallis.
                </p>
              </Tab>
              <Tab className='' eventKey='delivery' title='Order Delivery'>
                <h2>You Can Always Rely On Us To Deliver</h2>
                <p>
                  Quisque massa nisl, malesuada venenatis felis quis, bibendum
                  sollicitudin tortor. Pellentesque id nisi porttitor, maximus
                  risus a, molestie dui.
                </p>
              </Tab>
            </Tabs>
          </Col>
        </Row>
        <div className='d-none d-lg-block'>
          <Row className='how-it-works-row'>
            <Col className='how-it-works-column'>
              <span className='how-it-works-number line'>1</span>{' '}
              <span className='how-it-works-header'>Process Your Order</span>
            </Col>
            <Col className='how-it-works-text'>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Quisque ut interdum lectus.
              Aliquam gravida porttitor lorem at luctus.
            </Col>
          </Row>
          <Row className='how-it-works-row'>
            <Col className='how-it-works-column'>
              <span className='how-it-works-number line_last'>2</span>{' '}
              <span className='how-it-works-header'>Make Payment</span>
            </Col>
            <Col className='how-it-works-text'>
              Etiam congue magna in vehicula accumsan. Maecenas et velit
              feugiat, posuere magna ut, pharetra libero. Pellentesque sagittis
              neque sit amet turpis consectetur, et consectetur ante convallis.
            </Col>
          </Row>
          <Row className='how-it-works-row'>
            <Col className='how-it-works-column'>
              <span className='how-it-works-number'>3</span>{' '}
              <span className='how-it-works-header'>Order Delivery</span>
            </Col>
            <Col className='how-it-works-text'>
              Quisque massa nisl, malesuada venenatis felis quis, bibendum
              sollicitudin tortor. Pellentesque id nisi porttitor, maximus risus
              a, molestie dui.
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;