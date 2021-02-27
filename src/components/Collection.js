import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Collection = () => {
    return (
      <>
        <Col xs={12} sm={12} lg={8} className='image-column'>
          <Image src='../images/airpods.jpg' alt='airpods' fluid />
        </Col>
        <Col xs={12} sm={12} lg={4} className='image-text'>
          <div className='inner-column'>
            <h6>
              <span className='data-text-alert'>Ultra Sound Pods</span>
            </h6>
            <div className='inner-column-text'>
              <h2>Apple Airpods (2nd Generation)</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu enim urna. Nulla facilisi. Mauris sit amet ligula
              varius, suscipit.
            </p>
            <a href='/'>
              <span className='button-text'>See collections</span>
            </a>
          </div>
        </Col>
      </>
    );
}

export default Collection
