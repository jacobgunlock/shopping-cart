import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { Card } from "../Card";
import guitars from "../products/guitars";
import basses from "../products/basses";
import styled from "styled-components";
const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const CategoryStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  button {
    font-size: 36px;
    padding: 10px 0;
    &.active {
      border: solid red;
    }
  }
`;
const Filter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  button {
    font-size: 28px;
    padding: 10px;
    &.active {
      border: solid red;
    }
  }
`;

export const Shop = ({ cartCount, addCartItem, setCartCount }) => {
  function filterProducts(products, currentFilter) {
    if (currentFilter === "All") return products;
    return products.filter((item) => item.type === currentFilter);
  }
  function handleClick(type, e) {
    setCategory(type);
    setCurrentFilter("All");
  }
  function changeFilter(filter) {
    setCurrentFilter(filter);
  }

  const [category, setCategory] = useState("guitars");
  const [currentFilter, setCurrentFilter] = useState("All");
  const productType = category === "guitars" ? guitars : basses;
  const filteredProducts = filterProducts(productType, currentFilter);
  const filters = {
    guitars: ["Acoustic", "Electric"],
    basses: ["4 String", "5 String"],
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <CategoryStyled>
        <button
          className={category === "guitars" ? "active" : ""}
          category={category}
          key={"guitars"}
          onClick={(e) => handleClick("guitars", e)}
        >
          Guitars
        </button>
        <button
          className={category === "basses" ? "active" : ""}
          category={category}
          key={"basses"}
          onClick={(e) => handleClick("basses", e)}
        >
          Basses
        </button>
      </CategoryStyled>
      <Filter>
        <button
          key={"All"}
          className={currentFilter === "All" ? "active" : ""}
          onClick={() => changeFilter("All")}
        >
          All
        </button>
        {filters[category].map((filter) => {
          return (
            <button
              key={filter}
              className={currentFilter === filter ? "active" : ""}
              onClick={() => changeFilter(filter)}
            >
              {filter}
            </button>
          );
        })}
      </Filter>
      <Cards>
        {filteredProducts.map((item) => (
          <Card
            key={item.name}
            item={item}
            addCartItem={addCartItem}
            cartCount={cartCount}
            setCartCount={setCartCount}
          />
        ))}
      </Cards>
    </>
  );
};
