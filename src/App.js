import React, {useState,useEffect} from "react";
import * as Yup from 'yup'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home'
import Cart from './Cart'
import Confirmation from './Confirmation'
import Form from './Form'
import schema from './formSchema'
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
  const [id,setId]=useState(1)

  const initialCreds = {orderName: "", size:"", sauce:"", subsitute: "",pepperoni: false,olive:false,mushroom: false,cheese:false,special:'',id:id}
  const initialErrs = {orderName: "", size:"", sauce:"", subsitute: "",pepperoni:'',olive:'',mushroom:'',cheese:'',special:'', id: id}

  const [formData, setFormData] = useState(initialCreds)
  const [errors,setErrors]=useState(initialErrs)
  const [disabled,setDisabled]=useState(true)
  const [cart,setCart]= useState([])

  //Helper Funcs

  const inputChange = (name,value)=>{


    ////Yup stuff 

    Yup.reach(schema,name)
      .validate(value)
      .then(()=>setErrors({...errors, [name]:''}))
      .catch(err=> setErrors({...errors, [name]: err.errors[0]}))

    setFormData({...formData, [name]:value})
    //console.log(formData)
    
    
  }

  const submit =()=>{

    setCart([...cart,formData])
    // if i had an active server endpoint i would do ...
    //axios.post('http://endpoint/', formData)
    //    .then(res=>setCart([...cart,res.data]))
    //    .catch(err=> console.log('something went wrong', err))
    console.log(cart)
    setId(id+1)
    setFormData(initialCreds)
  }

  ///useEffect validation

  useEffect(()=>{
    schema.isValid(formData).then(valid=>setDisabled(!valid))
  },[formData])

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
            <Form values={formData} change={inputChange} submit={submit} disabled={disabled} errors={errors}/>
          </Route>

          <Route exact path='/cart'>
            <Cart cart={cart}/>
          </Route>

          <Route exact path='/confirmed'>
            <Confirmation/>
          </Route>

        </Switch>

      </Router>

    </>
  );
};
export default App;
