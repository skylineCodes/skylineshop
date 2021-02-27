import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
      <Card className='my-3 p-3 rounded product-card'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' height='250' />
        </Link>
        <Card.Body className='product-text'>
          <Card.Subtitle className='text-muted'>
            {product.category}
          </Card.Subtitle>
          <Link to={`/product/${product._id}`} className='product-link'>
            <Card.Title as='h3' className='product-title'>
              {product.name.substring(0, 16)}
            </Card.Title>
          </Link>
          <Card.Text as='h3'>
            <span>&#8358;</span>
            {product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}

export default Product
