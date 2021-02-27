import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listBlogDetails } from '../actions/blogActions';
import parse from 'html-react-parser';
import '../css/blog-details.css';

const BlogDetailsScreen = ({ match, history }) => {
    const blogId = match.params.id;

    const dispatch = useDispatch();

    const blogDetails = useSelector((state) => state.blogDetails);
    const { post, loading, error } = blogDetails;

    useEffect(() => {
      dispatch(listBlogDetails(blogId));
    }, [dispatch, blogId]);

    return loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
        <div className='blog-inner'>
          <article className='post-full'>
            <header className='post-full-header'>
              <section className='post-full-meta'>
                <time
                  className='post-full-meta-date'
                  dateTime='february 14, 2021'
                >
                  {post.createdAt.substring(0, 10)}
                </time>
              </section>
              <h1 className='post-full-title'>{post.title}</h1>
            </header>
            <div className='post-full-author-header'>
              <section className='author-card'>
                <img
                  className='author-profile-image'
                  src='../images/twitter-avatar.png'
                  alt='skylineCodes'
                />
                <section className='author-card-content author-card-content-no-bio'>
                  <h4 className='author-card-name'>
                    <a href='#'>{post.user.name}</a>
                  </h4>
                </section>
              </section>
            </div>
            <figure className='post-full-image'>
              <img src={post.image} alt={post.title} />
            </figure>
            <section className='post-full-content'>
              <div className='post-content'>
                <p>{parse(post.content)}</p>
              </div>
            </section>
          </article>
        </div>
      </>
    );
}

export default BlogDetailsScreen
