import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  background: #333;
  margin: 0px auto;
  padding: 15px;
  h1 {
    display: flex;
    align-items: center;
    color: #f2f2f2;
    svg {
      margin-right: 7px;
    }
  }

  .empty-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 0px;
    svg {
      color: #717171;
      font-size: 85px;
    }

    h3 {
      color: #717171;
      line-height: 2;
    }

    span {
      color: #717171;
    }
  }
`;

export default Container;
