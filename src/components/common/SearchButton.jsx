import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import IconButton from '@material-ui/core/IconButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  * {
    color: #717171;
  }

  &:hover {
    * {
      color: #f2f2f2;
    }
  }
`;
export default function Searchbar({ onSearchButtonClick }) {
  function onClick() {
    onSearchButtonClick(Date.now());
  }

  return (
    <Container onClick={onClick}>
      <h2>Search</h2>
      <IconButton color="default">
        <MdSearch />
      </IconButton>
    </Container>
  );
}

Searchbar.defaultProps = {
  onSearchButtonClick: () => console.log('The searchbar has displayed'),
};
Searchbar.propTypes = {
  onSearchButtonClick: PropTypes.func,
};
