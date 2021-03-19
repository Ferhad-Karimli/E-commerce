import React from  'react'
import { ErrorMessage , useField } from 'formik'
import style from "../Authentication/SignUp"
// import { $CombinedState } from 'redux'
// import "./authentication.css";


export const Textfield = ({label, ...props}) => {
    const[field,meta] = useField(props)
return(
<>
<label   className= "input_text" htmlFor={field.name}>{label}</label> <br/>
<input placeholder={field.name}    className={` style.input ${meta.touched && meta.error && 'is-invalid'}`}
{...field} {...props} 
autoComplete="off"/> 
<ErrorMessage  component="div" name={field.name}  className='error' />
</>


)

}