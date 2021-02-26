import * as Yup from 'yup'

const schema = Yup.object().shape({
    orderName: Yup.string().min(2,'Must be at least 2 characters').required('Must fill out name field'),
    size: Yup.string().oneOf(['small','medium','large']),
    sauce: Yup.string().oneOf(['original','bbq','garlic'],'You must choose a sauce'),
    pepperoni: Yup.boolean(),
    mushroom: Yup.boolean(),
    olive: Yup.boolean(),
    cheese: Yup.boolean(),
    special: Yup.string()

})

export default schema