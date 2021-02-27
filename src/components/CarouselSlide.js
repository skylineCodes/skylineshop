import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Arrow from './Arrow';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';

const CarouselSlide = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products, success } = productTopRated;

  const [index, setIndex] = useState(0);

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + products.length) % products.length;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  useEffect(() => {  
    if (success) {
      const handleKeyDown = (e) => {
        if (e.keyCode === 39) {
          onArrowClick('right');
        }

        if (e.keyCode === 37) {
          onArrowClick('left');
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
    
    dispatch(listTopProducts());
  }, [dispatch, success]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel>
      {products.map((product) => {
        <Carousel.Item key={product._id}>
          <Image src={product.image} alt={product.name} fluid />
        </Carousel.Item>;
      })}
    </Carousel>
  );
}

export default CarouselSlide
