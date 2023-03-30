import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";
import background from "../../assets/homepage.jpg";
import styled from "styled-components";

export const Home = () => {
  const Container = styled.div`
    background-image: url(${background});
    background-size: cover;
    height: 100vh;
  `;

  const Main = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    text-align: center;
    padding: 20px;
    margin-top: 30vh;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.7);
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 24px;
    }
    button {
      font-size: 24px;
      padding: 5px;
    }
    button:hover {
      cursor: pointer;
    }
  `;

  return (
    <Container>
      <Navbar />
      <Main>
        <h1>The #1 Guitar Marketplace</h1>
        <p>Home of the highest quality acoustic, electric, and bass guitars</p>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </Main>
    </Container>
  );
};
