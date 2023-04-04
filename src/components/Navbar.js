import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

  const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #151515;
    color: whitesmoke;
    box-shadow: 0px 2px 2px #000;
    h2 {
      font-size: 32px;
      margin: 0;
    }
    a:visited {
      text-decoration: none;
      color: whitesmoke;
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
export const Navbar = ({cartLength}) => {

  return (
    <Container>
      <Link to="/" style={{textDecoration: 'none', color: 'whitesmoke'}}>
        <h2>Guitar-Mart</h2>
      </Link>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/shop">
          <button>Shop</button>
        </Link>
        <Link to="/cart">
          <button name="cart">Cart {cartLength}</button>
        </Link>
      </nav>
    </Container>
  );
};
