import * as Yup from 'yup'

const schema = Yup.object().shape({
    orderName: Yup.string().min(2,'Must be at least 2 characters').required('Must fill out name field'),
    size: Yup.string().oneOf(['small','medium','large']),
    sauce: Yup.string().oneOf(['original','bbq','garlic'],'You must choose a sauce'),
    pepperoni: Yup.string(),
    mushroom: Yup.string(),
    olive: Yup.string(),
    cheese: Yup.string(),
    special: Yup.string(),
    id: Yup.number()

})

export default schema