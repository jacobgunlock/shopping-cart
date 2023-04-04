import React from 'react'

export const CartItem = (props) => {
  const {name, price, type, img} = props.item;
  return (
    <div>
      <img src={img} alt="" width={'200px'} />
      <h2>{name}</h2>
      <h2>{price}</h2>
      <div style={{display: 'flex'}}>
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
      <button>delete</button>
    </div>
  )
}
