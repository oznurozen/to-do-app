import * as Yup from "yup";
const validations  = Yup.object().shape({
    text: Yup.string().required('Burayı Doldurmak Zorunludur!')
})

export default validations;