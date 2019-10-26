import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithubAlt } from 'react-icons/fa';
import SearchButton from './SearchButton';
import SearchBar from './Search';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  background: #333;
  margin: 0px auto;
  padding: 15px;
  h1 {
    display: flex;
    color: #f2f2f2;

    align-items: center;
    svg {
      margin-right: 7px;
    }
  }
`;

export default function Header() {
  const [isSearching, setSearching] = useState(false);

  function handleSearchButtonClick() {
    setSearching(!isSearching);
  }

  return (
    <Container>
      {isSearching ? (
        <SearchBar handleBackPress={handleSearchButtonClick} />
      ) : (
        <>
          <h1>
            <FaGithubAlt />
            List of Repositories
          </h1>
          <SearchButton onSearchButtonClick={handleSearchButtonClick} />
        </>
      )}
    </Container>
  );
}
