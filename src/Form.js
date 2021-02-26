import React from 'react'
import styled from 'styled-components'


const OrderForm = styled.form`

width: 60%;
margin:auto;
background: lightgray;
height: 100%;
padding:2rem;

& textarea {
    width:100%;
    height:4rem;
}

& label{
    display:block;
}

& button{
    cursor:pointer;
}
`

const Form = (props)=>{

    const {values,change,submit, errors, disabled}=props

    const onChange = (e)=>{
        const{name,value,checked,type}=e.target
        const valueToUse = type ==='checkbox'? checked : value
        change(name,valueToUse)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        submit()
    }

    return(

        <div>

            <OrderForm onSubmit={onSubmit}>

            <h3>OrderName</h3>
                <label htmlFor='orderName'>
                    <input
                    name='orderName'
                    placeholder='John Doe'
                    type='text'
                    value={values.orderName}
                    onChange={onChange}/>
                </label>

            <h3>Size</h3>
                <label htmlFor='size'>
                    <select
                    name='size'
                    onChange={onChange}>

                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>

                    </select> 
                </label>
            
            <h3>Sauce</h3>

                <label>
                    <input
                    checked={values.sauce==='original'}
                    name='sauce'
                    value='original'
                    type='radio'
                    onChange={onChange}/>
                    Original
                </label>

                <label>
                    <input
                    checked={values.sauce==='bbq'}
                    name='sauce'
                    value='bbq'
                    type='radio'
                    onChange={onChange}/>
                    BBQ
                </label>

                <label>
                    <input
                    checked={values.sauce==='garlic'}
                    name='sauce'
                    value='garlic'
                    type='radio'
                    onChange={onChange}/>
                    Garlic Ranch
                </label>

            <h3>Toppings</h3>
                <label>
                    <input
                    name='pepperoni'
                    type='checkbox'
                    value={values.pepperoni}
                    onChange={onChange}/>
                    Pepperoni
                </label>

                <label>
                    <input
                    name='olive'
                    type='checkbox'
                    value={values.olive}
                    onChange={onChange}/>
                    Olive
                </label>

                <label>
                    <input
                    name='mushroom'
                    type='checkbox'
                    value={values.mushroom}
                    onChange={onChange}/>
                    Mushroom
                </label>

                <label>
                    <input
                    name='cheese'
                    type='checkbox'
                    value={values.cheese}
                    onChange={onChange}/>
                    Cheese
                </label>

            <h3>Special Instructions</h3>
                <label>
                    <textarea
                    value={values.special}
                    onChange={onChange}
                    name='special'
                    />
                </label>

            <button disabled={disabled}>Place Order</button>



            </OrderForm>



        </div>

    )
}

export default Form