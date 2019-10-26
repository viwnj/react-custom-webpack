import React, { Component } from 'react';
import { FaRegFolderOpen } from 'react-icons/fa';
import Container from '../common/Container';

export default class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const empty = true;
    return (
      <Container>
        {empty && (
          <div className="empty-container">
            <FaRegFolderOpen />
            <h3>There&apos;s no Repositories still.... :(</h3>
            <span>The repositories you add will appear in here</span>
          </div>
        )}
      </Container>
    );
  }
}
