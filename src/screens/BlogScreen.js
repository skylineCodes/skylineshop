import React, { useEffect } from 'react';
import parse from 'html-react-parser';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listBlog } from '../actions/blogActions';
import '../css/blog.css';

const BlogScreen = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, posts } = blogList;

  
  useEffect(() => {
    dispatch(listBlog());
  }, [dispatch]);

    return (
      <>
        <div className='header'>
          <div class='banner'>
            <div class='container'>
              <h1 class='banner-title'>
                <span>Skyline</span> Shop
              </h1>
              <p>documenting our experience</p>
              <form>
                <input
                  type='text'
                  class='search-input'
                  placeholder='search articles . . .'
                />
                <button type='submit' class='search-btn'>
                  <i class='fas fa-search'></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <section class='design' id='design'>
          <div class='container'>
            <div class='title'>
              <h2>Recent Arts & Designs</h2>
              <p>recent arts & designs on the blog</p>
            </div>

            <div class='design-content'>
              <div class='design-item'>
                <div class='design-img'>
                  <img src='images/art-design-1.jpg' alt='' />
                  <span>
                    <i class='far fa-heart'></i> 22
                  </span>
                  <span>Art & Design</span>
                </div>
                <div class='design-title'>
                  <a href='#'>
                    make an awesome art portfolio for college or university
                  </a>
                </div>
              </div>
              <div class='design-item'>
                <div class='design-img'>
                  <img src='images/art-design-2.jpg' alt='' />
                  <span>
                    <i class='far fa-heart'></i> 22
                  </span>
                  <span>Art & Design</span>
                </div>
                <div class='design-title'>
                  <a href='#'>
                    make an awesome art portfolio for college or university
                  </a>
                </div>
              </div>
              <div class='design-item'>
                <div class='design-img'>
                  <img src='images/art-design-3.jpg' alt='' />
                  <span>
                    <i class='far fa-heart'></i> 22
                  </span>
                  <span>Art & Design</span>
                </div>
                <div class='design-title'>
                  <a href='#'>
                    make an awesome art portfolio for college or university
                  </a>
                </div>
              </div>
              <div class='design-item'>
                <div class='design-img'>
                  <img src='images/art-design-4.jpg' alt='' />
                  <span>
                    <i class='far fa-heart'></i> 22
                  </span>
                  <span>Art & Design</span>
                </div>
                <div class='design-title'>
                  <a href='#'>
                    make an awesome art portfolio for college or university
                  </a>
                </div>
              </div>
              <div class='design-item'>
                <div class='design-img'>
                  <img src='images/art-design-5.jpg' alt='' />
                  <span>
                    <i class='far fa-heart'></i> 22
                  </span>
                  <span>Art & Design</span>
                </div>
                <div class='design-title'>
                  <a href='#'>
                    make an awesome art portfolio for college or university
                  </a>
                </div>
              </div>
              <div class='design-item'>
                <div class='design-img'>
                  <img src='images/art-design-6.jpg' alt='' />
                  <span>
                    <i class='far fa-heart'></i> 22
                  </span>
                  <span>Art & Design</span>
                </div>
                <div class='design-title'>
                  <a href='#'>
                    make an awesome art portfolio for college or university
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class='blog' id='blog'>
          <div class='container'>
            <div class='title'>
              <h2>Latest Blog</h2>
              <p>recent blogs about art & design</p>
            </div>

            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <div class='blog-content'>
                {posts.map((post) => (
                  <div class='blog-item'>
                    <div class='blog-img'>
                      <img src={post.image} alt={post.title} />
                      <span>
                        <i class='far fa-heart'></i>
                      </span>
                    </div>
                    <div class='blog-text'>
                      <span>{post.createdAt.substring(0, 10)}</span>
                      <h2>{post.title.substring(0, 20)}</h2>
                      <p>{parse(post.content.substring(0, 50))}</p>
                      <LinkContainer to={`/blog/${post._id}`}>
                        <a href='#'>Read More</a>
                      </LinkContainer>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section class='about' id='about'>
          <div class='container'>
            <div class='about-content'>
              <div>
                <img src='images/about-bg.jpg' alt='' />
              </div>
              <div class='about-text'>
                <div class='title'>
                  <h2>Catherine Doe</h2>
                  <p>art & design is my passion</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  totam voluptatem saepe eius ipsum nam provident sapiente,
                  natus et vel eligendi laboriosam odit eos temporibus impedit
                  veritatis ut, illo deserunt illum voluptate quis beatae quod.
                  Necessitatibus provident dicta consectetur labore!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  corrupti natus, eos quia recusandae voluptatem veniam modi
                  officiis minima provident rem sint porro fuga quos tempora ea
                  suscipit vero velit sed laudantium eaque necessitatibus
                  maxime!
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default BlogScreen;
