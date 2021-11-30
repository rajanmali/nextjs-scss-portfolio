import styled from 'styled-components';

export const ScorllToTopBtnWrapper = styled.button`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;

    position: fixed;
    right: 8%;
    bottom: 10%;

    background: none;
    outline: none;
    border: none;

    width: 20px;
    height: 20px;

    cursor: pointer;
  }
`;
