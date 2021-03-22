
import React, { Component } from "react";
import "./Addproduct.css";
import { connect } from "react-redux";
import * as Yup from 'yup'
import { Formik, Form, yupToFormErrors, Field} from "formik"
import { Textfield } from '../Main/Textfield'
import { Input} from "reactstrap"
import { withRouter } from "react-router-dom";
import { addProduct } from "../redux/actions";
import ReactJsTyping from 'reactjs-typing-effect';
const list=['product to the store.']
 

const validate = Yup.object({


        
    product:Yup.string()
    .max(15,"Must be 15 characters or less")
    .min(2, "Minumum must be 2 characters")
    .required("Product name is required"),
    count:Yup.string()
    .max(20,"Count number is required")
    .min(2, "Minumum must be 2 characters")
    .required(" Last name is Required"),
    title:Yup.string()
    .max(20,"Count number is required")
    .min(2, "Minumum must be 2 characters")
    .required(" Last name is Required"),
    main_image:Yup.string()
    .max(40,"Product Image is required")
    .min(0, "Minumum must be 0 characters")
    .required("Password is  Required"),
    price:Yup.string()
    .max(40,"Product price is required")
    .min(0, "Minumum must be 0 characters")
    .required("Product of Price  is  Required"),
    amount_by_unit:Yup.string()
    .max(20,"Amount of product is required")
    .min(2, "Minumum must be 2 characters")
    .required("Amount of product is required"),
    category:Yup.string()
    .max(20,"Amount of product is required")
    .min(2, "Minumum must be 2 characters")
    .required("Amount of product is required"),
    description:Yup.string()
    .max(20,"Amount of product is required")
    .min(2, "Minumum must be 2 characters")
    .required("Amount of product is required"),
    unit:Yup.string()
    .max(20,"Amount of product is required")
    .min(2, "Minumum must be 2 characters")
    .required("Amount of product is required"),


  
  })








const  Addproduct = (props) => {

    console.log(props)

  
    



   
    return (
      <>
          <h1  className="welcome">Add <ReactJsTyping StringList={list} speed={500}/>
          
          {/* <div style={{ fontSize: 49, color: '#0D1136'}}>
<ReactJsTyping StringList={list} speed={500}/>
 </div> */}
          
          </h1>
      
       <div className="aut_container">

<Formik
  initialValues={{
   
    product: "",
    count: "",
    title: "",
    main_image: "",
    price:"",
    amount_by_unit:"",
    category:"",
    description:"",
    unit:""
    
    
  
   

  }}

//   validationSchema={validate}
//  onSubmit= { value => {
//    console.log(value)
//  }}
  onSubmit = { (values) => {
    let data= new FormData()

    data.append("product",values.product)
    data.append("count",values.count)
    data.append("title",values.title)
    data.append("main_image", values.main_image)
    data.append("price", values.price)
    data.append('amount_by_unit',values.amount_by_unit)
    data.append('category',values.category)
    data.append('description',values.description)
    data.append('unit',values.unit)

   
   
    data.append("education",values.price)
  props.addProduct(values)
 
   console.log(values)
    

  }}
  >

{ formik => (

 <div>
<Form onSubmit={formik.handleSubmit} >




<div className="button_container">
                  <Textfield label="Product" name="product" type="text" />
                  <Textfield label="Count of Product" name="count" type="text" />
                  <Textfield label="Name of Product" name="title" type="text" />
                  <Textfield label="Unit of Product" name="amount_by_unit" type="text" />
                  <Textfield label="Price of Product" name="price" type="text" />
                  <Textfield label="Category of Product" name="category" type="text" />
                  <Textfield label="Description of Product" name="description" type="text" />
                  <Textfield label="Unit of Product" name="unit" type="text" />

            
                  {/* <Textfield
                    label="Cover photo"
                    name="cover_image"
                    type="file"
                  /> */}
               

                 

<label for="profile" className="label_name">Image of Product</label> <br/>
<Input label="Profile photo" name="main_image" type="file"  className = "auth_input" onChange ={ (e) => formik.setFieldValue("main_image",e.target.files[0]) } />  <br/>


</div>
<span className="button_containe">
<button className="btn_but" type='submit'>Add</button>
<button className="btn_but" type="reset">Reset </button>
<button


className="btn_but"
onClick={ () => props.history.push("/e-commerce/") } 
>
Go to home
</button>

</span>
</Form>
</div> )}




  </Formik>


        </div>
      </>
    );
  }

// export default connect(null,null)( withRouter(Addproduct));
export default connect(null,{addProduct})( withRouter(Addproduct));