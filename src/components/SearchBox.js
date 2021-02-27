import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  const clickHandler = (keyword) => {
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <>
      <Form onSubmit={submitHandler} className='search-header'>
        <input
          class='search-input'
          type='text'
          name='q'
          placeholder='Search'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button
          type='submit'
          class='search-btn'
          onClick={() => clickHandler(keyword)}
        >
          <i class='fas fa-search'></i>
        </button>
      </Form>
    </>
  );
};

export default SearchBox;
