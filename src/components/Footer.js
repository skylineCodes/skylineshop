import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../skylineshop.svg';
import '../css/footer.css';

const Footer = () => {
    return (
      <footer>
        <Container className='footer-container'>
          <Row className='footer-row'>
            <Col xs={12} sm={12} lg={4} className='footer-column'>
              <span>SkylineShop</span>
              <ul>
                <li>Product tour</li>
                <li>Customer Stories</li>
                <li>What is SkylineShop</li>
                <li>Pricing</li>
              </ul>
            </Col>
            <Col xs={12} sm={12} lg={4} className='footer-column'>
              <span>Resources</span>
              <ul>
                <li>Blog</li>
                <li>Support</li>
              </ul>
            </Col>
            <Col xs={12} sm={12} lg={4} className='footer-column'>
              <span>Compliance</span>
              <ul>
                <li>Terms of service</li>
                <li>Privacy policy</li>
                <li>Compliance, legal and security</li>
                <li>Cookie info</li>
              </ul>
            </Col>
            <Col xs={12} sm={12} lg={4} className='footer-column'>
              <span>Company</span>
              <ul>
                <li>About Us</li>
                <li>Founding Members</li>
                <li>Get Help</li>
              </ul>
            </Col>
          </Row>
          <Row className='copyright-row'>
            <Col xs={12} sm={12} lg={4} className='logo' as={Link} to='/'>
              <img src={logo} alt='SkylineShop' height='100' width='200' />
            </Col>
            <Col xs={12} sm={12} lg={4} className='text-center py-3 text'>
              Copyright &copy; 2014 - 2021 SkylineShop Ltd. All rights reserved.
            </Col>
            <Col xs={12} sm={12} lg={4} className='text-center py-3'>
              <section className='social_links'>
                <a href='#'>
                  <i class='fab fa-facebook-f'></i>
                </a>
                <a href='#'>
                  <i class='fab fa-twitter'></i>
                </a>
              </section>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer;
