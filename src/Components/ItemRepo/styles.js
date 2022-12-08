import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
  }

  a {
    text-decoration: none;
    color: white;
    margin: 10px;
    background-color: blue;
    padding: 10px;
    margin: 20px 10px 20px 0px;
    border-radius: 10px;
    &: hover {
      background-color: black;
    }
  }

  a.remover {
    background-color: #ff0000;
    &: hover {
      background-color: black;
    }
  }

  hr {
    color: #fafafa;
    margin: 20px 0px;
  }
`;
