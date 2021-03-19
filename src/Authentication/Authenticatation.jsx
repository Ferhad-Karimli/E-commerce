import React, { Component } from "react";
import "./authentication.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Yup from 'yup'
import { Formik, Form, yupToFormErrors, Field} from "formik"
import { Textfield } from './Textfield'
import { Input} from "reactstrap"

const  Registration = (props) => {
 console.log("this",props)


  const validate = Yup.object({
    first_name:Yup.string()
    .max(15,"Must be 15 characters or less")
    .min(2, "Minumum must be 2 characters")
    .required(" First name required"),
    last_name:Yup.string()
    .max(20,"Must be 15 characters or less")
    .min(2, "Minumum must be 2 characters")
    .required(" Last name is Required"),
    username:Yup.string()
    .required(" Username is Required"),
    email:Yup.string()
    .max(20,"Must be 20 characters or less")
    .min(2, "Minumum must be 2 characters")
    .required("Password is  Required"),
    password:Yup.string()
    .max(20,"Must be 20 characters or less")
    .min(2, "Minumum must be 2 characters")
    .required("Password is  Required"),
    city:Yup.string()
    .max(20,"Must be 20 characters or less")
    .min(2, "Minumum must be 2 characters")
    .required("Password is  Required"),
    birthday:Yup.string()
    .max(20,"Must be 20 characters or less")
    .min(2, "Minumum must be 2 characters")
    .required("Password is  Required"),
    position:Yup.string()
    .max(20,"Must be 20 characters or less")
    .min(2, "Minumum must be 2 characters")
    .required("Password is  Required"),
    education:Yup.string()
    .max(20,"Must be 20 characters or less")
    .min(2, "Minumum must be 2 characters")
    .required("Education is  Required"),
    image:Yup.string()
    .max(40,"Must be 20 characters or less")
    .min(0, "Minumum must be 0 characters")
    .required("Password is  Required"),
    password2:Yup.string()
    .oneOf([Yup.ref('password'),null], "Password must match")
    .required("Confirm password is required")
  })
   
    return (
      <>
          <h1  className="welcome">Welcome to Registration Page</h1>
      
       <div className="aut_container">

<Formik

  initialValues={{
   
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    position: "",
    birthday: "",
    education: "",
    city: "",
    cover_image: "",
    image:"",
    password: "",
    password2: "",
    checked:"",

  }}

  // validationSchema={validate}
//  onSubmit= { value => {
//    console.log(value)
//  }}
  onSubmit = { (values) => {
    let data= new FormData()
    data.append("first_name",values.first_name)
    data.append("last_name",values.last_name)
    data.append("username",values.username)  
    data.append("email", values.email)
    data.append("position", values.position)
    data.append('birthday',values.birthday)
    data.append("education",values.education)
    data.append("city",values.city)
    data.append( "password", values.password )
    data.append( "password2",values.password2)
    data.append( "image",values.image) 
    data.append( "cover_image",values.cover_image)
    data.append("checked", values.cover_image)
    props.registration(data,props.history.push)
  }}
  >

{ formik => (

 <div>
<Form>

<div className="button_container">
                  <Textfield label="First Name" name="first_name" type="text" />
                  <Textfield label="Last Name" name="last_name" type="text" />
                  <Textfield label="Username" name="username" type="text" />
                  <Textfield label="Education" name="education" type="text" />
                  <Textfield label="City" name="city" type="text" />
                  <Textfield label="Birthday" name="birthday" type="text" />
                  <Textfield label="Position" name="position" type="text" />
                  <Textfield label="Email" name="email" type="email" />
                  {/* <Textfield label="Profile photo" name="image" type="file" /> */}
                 

                 
                  {/* <Textfield
                    label="Cover photo"
                    name="cover_image"
                    type="file"
                  /> */}
                  <Textfield label="Password" name="password" type="password" />
                  <Textfield
                    label="Confirm Password"
                    name="password2"
                    type="password"/>


<label for="profile" className="label_name">Profile photo</label> <br/>
<Input label="Profile photo" name="image" type="file"  className = "auth_input" onChange ={ (e) => formik.setFieldValue("image",e.target.files[0]) } />  <br/>
<label for="male" className="label_name"  >Cover Photo</label> 
<Input label="Cover photo" name="cover_image" type="file"  className = "auth_input" onChange ={ (e) => formik.setFieldValue("cover_image",e.target.files[0]) } />
<span  className="gender">
<Field type = "radio"  value="man" name="checked"  id='1'/> <span className=" gender-color" >   Man</span> 
<Field type = "radio"  value="woman"  name="checked" id='2'/> <span className=" gender-color" > Woman </span> 
</span>
</div>
<span className="button_containe">
<button className="btn_but" type='submit'>Sign Up</button>
<button className="btn_but" type="reset">Reset </button>
<button
onClick={() => props.history.replace("/login")}

className="btn_but"
>
Login
</button>

</span>
</Form>
</div> )}



  </Formik>


        </div>
      </>
    );
  }

export default connect(null, { registration })( Registration);
