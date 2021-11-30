import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: space-between; */
  align-items: stretch;

  height: 100vh;

  @media only screen and (max-width: 768px) {
    flex-flow: column wrap;
    justify-content: stretch;

    width: 100vw;
    height: auto;
  }
`;
