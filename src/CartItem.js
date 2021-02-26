import React from 'react'
import styled from 'styled-components'

const CartDiv = styled.div`

background: lightgray;
width: 60%;
margin:10px auto 10px auto;
padding: 1rem;

& p{
    margin: 0
}

`



const CartItem = (props)=>{

    const {item}=props

    return(
        <CartDiv>
            <h4>{item.orderName}'s Order</h4>
            <p>{item.size}</p>
            <p>{item.sauce}</p>
            <p>{item.pepperoni === true && 'pepperoni'}</p>
            <p>{item.mushroom === true && 'mushroom'}</p>
            <p>{item.olive === true && 'olives'}</p>
            <p>{item.cheese === true && 'cheese'}</p>
            <p>{item.special === '' ? 'No special Instructions': `"${item.special}"`}</p>

        </CartDiv>

    )
}

export default CartItem