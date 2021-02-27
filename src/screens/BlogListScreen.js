import React, { useEffect } from 'react';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listBlog } from '../actions/blogActions';
import { Link } from 'react-router-dom';

const BlogListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, posts } = blogList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo.isAdmin) {
      history.push('/login');
    }

    dispatch(listBlog());
  }, [
    dispatch,
    history,
    userInfo,
  ]);

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Posts</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' as={Link} to='/admin/blog/create'>
            <i className='fas fa-plus'></i> Create Blog
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>IMAGE</th>
                <th>CONTENT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>{post._id}</td>
                  <td>{post.title}</td>
                  <td>{post.image}</td>
                  <td>{post.content}</td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default BlogListScreen;
