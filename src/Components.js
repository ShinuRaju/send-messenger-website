import styled from 'styled-components';
import { css } from 'styled-components';


export const Container = styled.div`
max-width: 1100px;
margin: 0 auto;

`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 1rem;

  div {
    font-size: 1.5rem;
    font-style: italic;
    font-weight: bolder;
    white-space: nowrap;
  }

  div:last-of-type {
    display: none;
    z-index: 999;

    @media screen and (max-width: 760px) {
      display: block;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;

    li {
      /* color: black; */
      padding: 0 0.5rem;
      /* background-color: red; */

      a {
        color: black;
        font-size: 1rem;
        font-weight: bold;
      }
    }

    @media screen and (max-width: 760px) {
      position: absolute;
      ${(props) => {
        return props.Icon
          ? css`
             visibility: hidden;
            `
          : css`
              visibility: visible;
            `
      }};
      right:0;
      top: 80px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      align-items: center;
      align-content: center;
      background: black;
      height: calc(100vh - 80px);
      width: 33%;

      li {
        padding: 1rem 0;
        text-align: center;
        /* background: red; */
        width: 100%;

        a {
          color: #f9a826;
        }
      }
    }
  }
`;
export const HeroDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: start;
  align-items: center;
  height: 95vh;
  margin: 0 auto;
  padding: 0 1rem;
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;
export const LeftContainer = styled.div`
  padding: 3rem 1rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  button {
    padding: 1rem 3rem;
    outline: none;
    border: none;
    color: #f9a826;
    font-size: 1rem;
    background: black;
  }
`;
export const RightContainer = styled.div`
  img {
    height: 100%;
    width: 100%;
  }

  
`;

