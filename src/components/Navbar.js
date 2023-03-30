import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    color: whitesmoke;
    h2 {
      font-size: 32px;
      margin: 0;
    }
    button {
      border: none;
      background-color: #fff;
      margin: 0 10px;
      font-size: 24px;
      background-color: transparent;
      color: whitesmoke;
    }
    *:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `;
  return (
    <Container>
      <h2>Guitar-Mart</h2>
      <nav>
        <button>Home</button>
        <button>Shop</button>
        <button>Cart</button>
      </nav>
    </Container>
  );
};
