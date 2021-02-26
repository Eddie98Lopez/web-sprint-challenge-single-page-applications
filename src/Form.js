import React from 'react'
import styled from 'styled-components'


const OrderForm = styled.form`

& label {
    dislplay:block;
}
`

const Form = (props)=>{

    const {values,change,submit, errors, disabled}=props

    const onChange = (e)=>{
        const{name,value,checked,type}=e.target
        const valueToUse = type==='checked'? checked : value
        change(name,valueToUse)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        submit()
    }

    return(

        <div>



        </div>

    )
}

export default Form