import React, { useState } from "react";
import { Navbar } from "../Navbar";
import guitars from "../products/guitars";
import basses from "../products/basses";
import { Card } from "../Card";
import styled from "styled-components";

export const Shop = () => {
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
  const [category, setCategory] = useState("guitars");
  const [filters, setFilters] = useState({
    one: "Acoustic",
    two: "Electric",
    all: "All",
    current: "All",
  });

  let list;
  if (category === "guitars") {
    switch (filters.current) {
      case "All":
        list = guitars.map((item) => {
          return <Card item={item} />;
        });
        break;
      case "Electric":
        const electricGuitars = guitars.filter((item) => {
          return item.type === "Electric";
        });
        list = electricGuitars.map((item) => {
          return <Card item={item} />;
        });
        break;
      case "Acoustic":
        const acousticGuitars = guitars.filter((item) => {
          return item.type === "Acoustic";
        });
        list = acousticGuitars.map((item) => {
          return <Card item={item} />;
        });
        break;
      default:
        break;
    }
  } else if (category === "basses") {
    switch (filters.current) {
      case "All":
        list = basses.map((item) => {
          return <Card item={item} />;
        });
        break;
      case "4 String":
        const fourStrings = basses.filter((item) => {
          return item.type === "4 String";
        });
        list = fourStrings.map((item) => {
          return <Card item={item} />;
        });
        break;
      case "5 String":
        const fiveStrings = basses.filter((item) => {
          return item.type === "5 String";
        });
        list = fiveStrings.map((item) => {
          return <Card item={item} />;
        });
        break;
      default:
        break;
    }
  }
  const handleCategoryChange = (type) => {
    setCategory(type);
    if (type === 'guitars') {
      setFilters({
        one: "Acoustic",
        two: "Electric",
        all: "All",
        current: "All",
      });
    } else
      setFilters({
        one: "4 String",
        two: "5 String",
        all: "All",
        current: "All",
      });
  };
  return (
    <>
      <Navbar />
      <CategoryStyled>
        <button onClick={() => handleCategoryChange("guitars")}>Guitars</button>
        <button onClick={() => handleCategoryChange("basses")}>Basses</button>
      </CategoryStyled>
      <Filter>
        <label htmlFor="type">Filter</label>
        <select
          name="type"
          value={filters.current}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, current: e.target.value }))
          }
        >
          <option value={filters.all}>{filters.all}</option>
          <option value={filters.one}>{filters.one}</option>
          <option value={filters.two}>{filters.two}</option>
        </select>
      </Filter>
      <Cards>{list};</Cards>
    </>
  );
};
