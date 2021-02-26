import React from 'react'
import {Route,Link} from 'react-router-dom'
import styled from 'styled-components'

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

const Home = (props)=>{
    return(
        <div>
            <Header>
                <h1>Order your pizza Now!!</h1>
                <Link to='/pizza'><button>Order Now</button></Link>
            </Header>
        </div>
    )
}

export default Home