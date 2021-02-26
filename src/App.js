import React, {useState,useEffect} from "react";
import * as Yup from 'yup'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home'
import Cart from './Cart'
import Form from './Form'
import formSchema from './formSchema'
import styled from 'styled-components'

const Nav = styled.nav`
display: flex;
justify-content:space-around;
align-items: center;
color:white;
background: rgb(73,79,82);
height:10vh;

& a{
  text-decoration:none;
  color: white;
  padding: 1rem
}
`

const App = () => {

  const initialCreds = {orderName: "", size:"", sauce:"", subsitute: "", specialInfo: "",toppings:{}}
  const initialErrs = {orderName: "", size:"", sauce:"", subsitute: "", specialInfo: "",toppings:""}

  const [formData, setFormData] = useState(initialCreds)
  const [errors,setErrors]=useState(initialErrs)
  const [disabled,setDisabled]=useState(true)
  const [cart,setCart]= useState([])

  return (
    <>

      <Router>
        <Nav>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order Now</Link>
          <Link to='/cart'>Cart</Link>
        </Nav>

        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route exact path='/pizza'>
            <Form/>
          </Route>

          <Route exact path='/cart'>
            <Cart/>
          </Route>

        </Switch>

      </Router>

    </>
  );
};
export default App;
