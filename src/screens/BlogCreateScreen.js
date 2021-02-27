import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import {
  CKEditor,
} from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { createBlog } from '../actions/blogActions';
import { CREATE_BLOG_RESET } from '../constants/blogConstants';
import Message from '../components/Message';

const BlogCreateScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [uploading, setUploading] = useState(false);

  const blogCreate = useSelector((state) => state.blogCreate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = blogCreate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CREATE_BLOG_RESET });
      history.push('/admin/bloglist');
    }
  });

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (err) {
      console.error(err);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createBlog({
        title,
        image,
        content
      })
    );
  };

  const editorConfiguration = {
    toolbar: [
      'Heading',
      'bold',
      'italic',
      'Link',
      'BulletedList',
      'NumberedList',
      'Indent',
      'Outdent',
      'BlockQuote',
      'InsertTable',
      'undo',
      'redo',
      'CodeBlock',
      'ImageUpload',
      'code',
      'mediaEmbed',
    ],
    ckfinder: {
      uploadUrl: '/ckeditor/upload',
    },
  };

  return (
    <>
      <Link to='/admin/bloglist' className='btn btn-light my-3'>
        <i class='fas fa-arrow-left'></i> Go Back
      </Link>
      <FormContainer>
        <h1>Create Post</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='title'
              placeholder='Post title'
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='image'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter image url'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
            <Form.File
              id='image-file'
              label='Choose File'
              custom
              onChange={uploadFileHandler}
            ></Form.File>
            {uploading && <Loader />}
          </Form.Group>
          <Form.Group controlId='content'>
            <Form.Label>Content</Form.Label>
            <div className='editor'>
              <CKEditor
                editor={Editor}
                config={editorConfiguration}
                onInit={(editor) => {}}
                data={content}
                onChange={(e, editor) => {
                  const data = editor.getData();
                  setContent(data);
                }}
              />
            </div>
          </Form.Group>
          <div>{ content }</div>
          <Button type='submit' variant='primary'>
            Publish to draft
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default BlogCreateScreen;
