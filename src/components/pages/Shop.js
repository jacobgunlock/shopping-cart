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
  padding: 10px;
  gap: 20px;

  button {
    font-size: 48px;
    padding: 20px 0;
  }
`;
const Filter = styled.div`
  display: flex;
  justify-content: center;
  * {
    margin: 5px;
  }
`;

export const Shop = (props) => {
  function filterProducts(products, currentFilter) {
    if (currentFilter === "All") return products;
    return products.filter((item) => item.type === currentFilter);
  }
  function handleCategoryChange(type) {
    setCategory(type);
    setCurrentFilter("All");
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
      <Navbar cartCount={props.cartCount} />
      <CategoryStyled>
        <button key={"guitars"} onClick={() => handleCategoryChange("guitars")}>
          Guitars
        </button>
        <button key={"basses"} onClick={() => handleCategoryChange("basses")}>
          Basses
        </button>
      </CategoryStyled>

      <Filter>
        <label htmlFor="type">Filter</label>
        <select
          name="type"
          value={currentFilter}
          onChange={(e) => setCurrentFilter(e.target.value)}
        >
          <option key={"All"} value="All">
            All
          </option>
          {filters[category].map((filter) => {
            return (
              <option key={filter} value={filter}>
                {filter}
              </option>
            );
          })}
        </select>
      </Filter>

      <Cards>
        {filteredProducts.map((item) => (
          <Card
            key={item.name}
            item={item}
            addCartItem={props.addCartItem}
            cartCount={props.cartCount}
            setCartCount={props.setCartCount}
          />
        ))}
      </Cards>
    </>
  );
};
