import React, { useState, useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';
import { register } from '../actions/userActions';
import '../login.css';

const LoginScreen = ({ location, history }) => {
  // Login Credentials
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Register Credentials
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading: loadingRegister, userInfo: userInfoRegister } = userRegister;

  console.log(userInfoRegister);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading: loadingLogin, error, userInfo: userLoginInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    // if (userInfoRegister) {
    //   history.push(redirect);
    // }

    // if (userLoginInfo) {
    //   history.push(redirect);
    // }
  }, [history, userInfoRegister, userLoginInfo, redirect]);

  const submitLoginHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  const submitRegisterHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Password do not match!');
    } else {
      dispatch(register(name, email, password));
    }
  };

  const container = useRef();

  return (
    <div ref={container} className='containers'>
      <div className='forms-container'>
        <div className='signin-signup'>
          {error && <Message variant='danger'>{error}</Message>}
          {loadingLogin && <Loader />}
          <Form onSubmit={submitLoginHandler} className='sign-in-form'>
            <h2 className='title'>Sign in</h2>
            <div className='input-field'>
              <i className='fas fa-envelope'></i>
              <input
                type='email'
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type='submit' value='Login' className='login_btn solid' />
            <p className='social-text'>Or Sign in with social platforms</p>
            <div className='social-media'>
              <a href='/#' className='social-icon'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='/#' className='social-icon'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='/#' className='social-icon'>
                <i className='fab fa-google'></i>
              </a>
              <a href='/#' className='social-icon'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </Form>
          {message && <Message variant='danger'>{message}</Message>}
          {loadingRegister && <Loader />}
          <Form onSubmit={submitRegisterHandler} className='sign-up-form'>
            <h2 className='title'>Sign up</h2>
            <div className='input-field'>
              <i className='fas fa-user'></i>
              <input
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='input-field'>
              <i className='fas fa-envelope'></i>
              <input
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <input type='submit' className='login_btn' value='Sign up' />
            <p className='social-text'>Or Sign up with social platforms</p>
            <div className='social-media'>
              <a href='/#' className='social-icon'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='/#' className='social-icon'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='/#' className='social-icon'>
                <i className='fab fa-google'></i>
              </a>
              <a href='/#' className='social-icon'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
          </Form>
        </div>
      </div>

      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>New here?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              onClick={() => {
                container.current.classList.add('sign-up-mode');
              }}
              className='login_btn transparent'
              id='sign-up-btn'
            >
              Sign up
            </button>
          </div>
          <img src='../images/log.svg' className='image' alt='' />
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              onClick={() => {
                container.current.classList.remove('sign-up-mode');
              }}
              className='login_btn transparent'
              id='sign-in-btn'
            >
              Sign in
            </button>
          </div>
          <img src='../images/register.svg' className='image' alt='' />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
