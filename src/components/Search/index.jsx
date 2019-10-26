import React from 'react';
import PropTypes from 'prop-types';
import Container from '../common/Container';
import RepoInfo from './RepoInfo';
import api from '../../services/api';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      avatar: '',
      description: '',
      // loading: false,
    };
  }

  async componentDidMount() {
    const { location } = this.props;
    const query = location.search.replace('?q=', '');
    try {
      const response = await api.get(`/repos/${query}`);
      this.updateState(response);
    } catch (e) {
      console.log({ e });
    }
  }

  async componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (prevProps.location.search !== location.search) {
      const query = location.search.replace('?q=', '');
      try {
        const response = await api.get(`/repos/${query}`);
        this.updateState(response);
      } catch (e) {
        console.log({ e });
      }
    }
  }

  updateState = response => {
    if (!response) return;

    this.setState({
      name: response.data.name,
      avatar: response.data.owner.avatar_url,
      organizationName: response.data.owner.login,
      description: response.data.description,
    });
  };

  render() {
    const { name, avatar, organizationName, description } = this.state;

    return (
      <Container>
        <RepoInfo
          description={description}
          avatar={avatar}
          name={name}
          organizationName={organizationName}
        />
      </Container>
    );
  }
}

Search.propTypes = {
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
};
