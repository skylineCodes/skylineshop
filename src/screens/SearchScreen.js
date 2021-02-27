import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Paginate from '../components/Paginate.js';
import Message from '../components/Message.js';
import Loader from '../components/Loader.js';
import { listProducts } from '../actions/productActions';

const SearchScreen = ({ match }) => {
    const keyword = match.params.keyword;
    
    const page = match.params.page || 1;

    const pageSize = 10;

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products, current_page, total_pages } = productList;

    useEffect(() => {
      dispatch(listProducts(keyword, page, pageSize));
    }, [dispatch, keyword, page]);

    return (
      <div>
        {!keyword ? (
          <div>No product search</div>
        ) : (
          <>
            <Link to='/' className='btn btn-light'>
              <i class='fas fa-arrow-left'></i> Go Back
            </Link>
            <section className='new-arrivals-section'>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message variant='danger'>{error}</Message>
              ) : (
                <>
                  <div className='new-arrrivals-header'>
                    <h1>{products.length} result found</h1>
                  </div>
                  <div className='is-divider'></div>
                  <div className='new-arrivals-gap-element'></div>
                  <Row className='new-arrivals-products-card'>
                    {products.map((product) => (
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                      </Col>
                    ))}
                  </Row>
                  <Paginate
                    total_pages={total_pages}
                    current_page={current_page}
                    keyword={keyword ? keyword : ''}
                  />
                </>
              )}
            </section>
          </>
        )}
      </div>
    );
}

export default SearchScreen;
