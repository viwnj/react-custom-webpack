import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { MdArrowBack, MdClose } from 'react-icons/md';
import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  width: 100%;
  border: 2px solid blue;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  button {
    color: #717171;
    font-size: 30px;
    padding: 4px;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  background: transparent;
  border: 0px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  &::placeholder {
    font-weight: bold;
    font-size: 18px;
  }
`;

function SearchBar({ handleBackPress, history }) {
  const [search, setSearch] = useState('');
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  });

  function handleSearch(e) {
    const { value } = e.target;
    setSearch(value);
  }

  function clearSearch() {
    setSearch('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push(`/search?q=${search}`);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <IconButton onClick={handleBackPress}>
        <MdArrowBack />
      </IconButton>
      <Input
        placeholder="Search a repo"
        ref={inputEl}
        onChange={handleSearch}
        value={search}
      />
      <IconButton onClick={clearSearch}>
        <MdClose />
      </IconButton>
    </Container>
  );
}

export default withRouter(SearchBar);

SearchBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  handleBackPress: PropTypes.func.isRequired,
};
