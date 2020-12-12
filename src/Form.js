import React, {useState, useEffect} from "react";
import axios from 'axios'
import * as Yup from 'yup'



const Form = () => {

    const [formState,setFormState]=useState({orderName: "", size:"", sauce:"", subsitute: "", specialInfo: "",toppings:{}})
    const [errors,setErrors]= useState({orderName: "", size:"", sauce:"", subsitute: "", specialInfo: "",toppings:""})
    const [disabled,setDisabled]=useState({})
    const schema = Yup.object().shape({
        orderName: Yup
            .string()
            .required()
            .min(2, 'Must be more than 2 characters long'),
        size:Yup
            .string()
            .oneOf(['small','medium','large'], "You must choose a size"),
        sauce: Yup
            .string()
            .oneOf(['original','bbq','garRanch'],"You must choose a sauce"),
        toppings: Yup
            .object(),
        specialInfo: Yup
            .string()
    })


    const onChange = (event)=>{

        const {checked, type ,value, name,}=event.target
        const valueToUse = type==='checkbox' ? checked : value
        setFormState({...formState, [name]:valueToUse})
    }

    const toppingChange = (event)=>{
       const {checked,type,value,name}=event.target

       const useValue = type==='checkbox' ? checked : value

       setFormState({...formState, toppings:{...formState.toppings,[name]:useValue}})
    }

    console.log(formState)

  return (
    <div>

    <form>

<h2>Order Form</h2>
        <div>
            <h3>Order Name</h3>
            <input
            name="orderName"
            value={formState.orderName}
            onChange={onChange}
            type='text'/>
        </div>
        
        <div className='size'>
        <h3><label htmlFor='size'>Size</label></h3>
            <select id="size" name="size" onChange={onChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        
        </div>

        <div className="sauces">

            <h3>Sauce</h3>

        <label>
            <input
            checked={formState.sauce==="original"}
            name='sauce'
            value='original'
            type='radio'
            onChange={onChange}
            /> Original
        </label>
        <label>
            <input
            checked={formState.sauce==="bbq"}
            name='sauce'
            value='bbq'
            type='radio'
            onChange={onChange}
            /> BBQ
        </label>
    
        <label>
            <input
            checked={formState.sauce==="garRanch"}
            name='sauce'
            value='garRanch'
            type='radio'
            onChange={onChange}
            /> Garlic Ranch
        </label>
        </div>

        <div className="toppings">
            <h3>toppings</h3>

            <label>
                <input
                name='pepperoni'
                value='pepperoni'
                type='checkbox'
                onChange={toppingChange}
                /> Pepperoni
            </label>

            <label>
                <input
                name='mushroom'
                value='mushroom'
                type='checkbox'
                onChange={toppingChange}
                /> Mushroom
            </label>

            <label>
                <input
                name='bell-pepper'
                value='bell-pepper'
                type='checkbox'
                onChange={toppingChange}
                /> Bell Peppers
            </label>

            <label>
                <input
                name='olives'
                value='olives'
                type='checkbox'
                onChange={toppingChange}
                /> Olives
            </label>
        </div>

        <div>
            <h3>Subsitutes</h3>
        <label>
                <input
                name='subsitute'
                value={formState.subsitute}
                type='checkbox'
                onChange={onChange}
                /> Gluten Free 
            </label>
        </div>

        <div>
            <h3>Special Instructions</h3>
            <textarea
            name="specialInfo"
            value={formState.specialInfo}
            onChange={onChange}/>
        </div>
        



    <button type='submit'> Submit Order</button>

    </form>

    
    </div>
  );
};
export default Form;