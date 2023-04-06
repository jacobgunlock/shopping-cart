import React, { useState, useEffect } from 'react'

export const CartItem = (props) => {
  const {name, price, type, img} = props.item;

  function handleClick(e) {
    if (e.target.innerText === '+') {
      props.changeQty(props.item, '+')
    } else {
      props.changeQty(props.item, '-')
    } 
  }
  function deleteCartItem() {
    props.deleteCartItem(props.item);
  } 

  return (
    <div>
      <img src={img} alt="" width={'200px'} />
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{type}</h2>
      <div style={{display: 'flex'}}>
        <button onClick={(e) => handleClick(e)}>-</button>
        <p>{props.item.quantity}</p>
        <button onClick={(e) => handleClick(e)}>+</button>
      </div>
      <button onClick={deleteCartItem}>delete</button>
    </div>
  )
}
