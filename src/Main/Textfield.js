import React from  'react'
import { ErrorMessage , useField } from 'formik'
import { $CombinedState } from 'redux'
import "./Addproduct.css";


export const Textfield = ({label, ...props}) => {
    const[field,meta] = useField(props)
return(
<>
<label   className= "input_text" htmlFor={field.name}>{label}</label> <br/>
<input  className={` auth_input ${meta.touched && meta.error && 'is-invalid'}`}
{...field} {...props} 
autoComplete="off"/> <br/>
<ErrorMessage  component="div" name={field.name}  className='error' />
</>


)

}