import React from 'react'
import styled from 'styled-components';

export const Card = (props) => {
  const { img, name, price, type } = props.item;

  const Container = styled.div`
    border: solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    margin: 10px;
    border-radius: 10px;
  `

  return (
    <Container>
      <img src={img} alt="" style={{width: '200px'}}/>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{type}</p>
      <button>Add to Cart</button>
    </Container>
  )
}
