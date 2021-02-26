import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = styled.header`

width:100%;
height: 70vh;
background: grey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& button{
    cursor:pointer;
}


`

const Confirmation = (props)=>{

    return (
       <Header>
           <h2>Order confirmed!!</h2>
           <div>
               <Link to='/'>Back Home</Link>
               <Link to='/cart'> View Cart</Link>
           </div>
       </Header>
    )

}

export default Confirmation