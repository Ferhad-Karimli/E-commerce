import React from "react";
import * as Yup from 'yup'
import { Formik, Form, yupToFormErrors, Field} from "formik"
import style from "../Authentication/SignUp.module.css";
import { Textfield } from "./Textfield";
import registration from '../redux/actions/index'
import { FcUpload  } from "react-icons/fc";


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
  image:Yup.string()
  .max(40,"Must be 20 characters or less")
  .min(0, "Minumum must be 0 characters")
  .required("Password is  Required"),
 
})


const SignUp = (props) => {

  
  
  return (
    <div className={style.SignUpForm}>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          image: "",
          password: "",
        }}
        validationSchema = {validate}
      
        onSubmit={(values) => {
          let data = new FormData();
          data.append("first_name", values.first_name);
          data.append("last_name", values.last_name);
          data.append("username", values.username);
          data.append("email", values.email);
          data.append("password", values.password);
          data.append("image", values.image);
          props.registration(data);
          console.log("data" ,data)
      
        }}
      >
        {(formik) => (
          <div>
              <div className={style.container}>
            <Form onSubmit={formik.handleSubmit}   >
                
              <div className="button_container">
                  <h3  className={style.welcome}>Sign Up</h3>
                  <p className={style.paragraph}>By signing up, you agree to Pickbazar's</p>
                <Textfield  className={style.input}  placeholder="First Name" name="first_name" type="text" />
                <Textfield className={style.input_button}  placeholder="Last Name" name="last_name" type="text" />
                <Textfield className={style.input_button} placeholder="username" name="username" type="text" />
                <Textfield className={style.input_button}  placeholder="email"   name="email" type="email" />
                <Textfield className={style.input_button}  placeholder="password"  name="password" type="password" />
                {/* <label for="profile" className="label_name">
                  Profile photo
                </label>{" "} */}
                <br />
                <label htmlFor="image"  className={style.image_input}  > <span className= {style.image_icon}>Upload Image</span>  
              <FcUpload/>

                <input
                  label="Profile photo"
                  name="image"
                  type="file"
                  id="image"
                className={style.image_input}
                  onChange={(e) =>
                    formik.setFieldValue("image", e.target.files[0])
                  }
                />
                </label>

                <br />
              </div>
              <span className = "button_containe">
                <button className={style.signUp}>
                  Sign Up
                </button>
          
              </span>
           
            </Form>
          </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default SignUp;
