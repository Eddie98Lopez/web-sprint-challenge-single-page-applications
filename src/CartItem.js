import React from 'react'

const CartItem = (props)=>{

    const {item}=props

    return(
        <div>
            <h4>Pizza</h4>
            <p>{item.size}</p>
            <p>{item.sauce}</p>
            <p>{item.pepperoni === true && 'pepperoni'}</p>
            <p>{item.mushroom === true && 'mushroom'}</p>
            <p>{item.olive === true && 'olives'}</p>
            <p>{item.cheese === true && 'cheese'}</p>
        </div>

    )
}

export default CartItem