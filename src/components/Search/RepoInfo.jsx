import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { MdAdd } from 'react-icons/md';

const Container = styled.div`
  display: flex;
  align-items: center;
  .profile-container {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-right: 7px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  .profile-container {
    strong {
      color: #f2f2f2;
      text-transform: capitalize;
      span {
        font-style: italic;
        font-weight: 400;
        color: #7a7a7a;
      }
    }

    span {
      font-size: 14px;
      color: #7a7a7a;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-left: auto;

  button {
    background: #7151c9;
    color: #f2f2f2;
  }
`;

export default function RepoInfo({
  name,
  organizationName,
  avatar,
  description,
}) {
  const desc =
    description.length > 90
      ? `${description.substring(0, 90)}...`
      : description;
  return (
    <Container>
      <img src={avatar} alt={`${name}/${organizationName}`} />
      <div className="profile-container">
        <strong>
          {name} <span>{desc}</span>
        </strong>
        <span>{'organizationName'}</span>
      </div>
      <ButtonsContainer>
        <IconButton>
          <MdAdd />
        </IconButton>
      </ButtonsContainer>
      <MdAdd />
      <MdAdd />
    </Container>
  );
}

RepoInfo.defaultProps = {
  description: 'No description provided.',
};

RepoInfo.propTypes = {
  name: PropTypes.string.isRequired,
  organizationName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string,
};
