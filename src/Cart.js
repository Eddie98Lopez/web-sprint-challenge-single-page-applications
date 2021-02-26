import React from 'react'
import {Route,Link} from 'react-router-dom'
import CartItem from './CartItem'
import styled from 'styled-components'


const Div = styled.div`
width:100%;
height: 70vh;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& button{
    cursor:pointer;
}
`

const Cart = (props)=>{



    const {cart} = props

    const empty= (
        <Div>
            <h2>Looks like your cart is empty...Place and order for some yum yum now</h2>
           <Link to='/pizza'> <button>OrderNow</button></Link>
        </Div>
    )

    
    

    return (
        <div>

            {cart.length === 0 ? empty : cart.map(item=><CartItem item={item}/>) }


        </div>
    )

}

export default Cart