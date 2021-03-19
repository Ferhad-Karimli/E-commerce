import React from "react";
import { useState, useEffect } from "react";
import style from "../Authentication/Login.module.css";
import header from "../Header/Header.module.css";
import { Formik, Form, yupToFormErrors, Field} from "formik"
import { Textfield } from "./Textfield";
import SignUp from "./SignUp";

const Login = (props) => {
 console.log (props)
 const [editSignUp, setEditSignUp] = useState(false);
 
 
 useEffect(() => {
  setEditSignUp(props.signUpClose)
   
 }, [props.signUpClose])


  return (
    <div className={style.SignUpForm}>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        // validationSchema={validate}
        //  onSubmit= { value => {
        //    console.log(value)
        //  }}
        onSubmit={(values) => {
        
          props.loginAction(values);
        
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <div className={style.container}>
              <h3  className={style.welcome}>Welcome Back</h3>
                  <p className={style.paragraph}>Login with your email & password</p>
                <Textfield className={style.input}    name="username" type="text"/>
                <Textfield  className={style.input_down}   name="password" type="password"/>
             <button className={style.button_continue} type="submit"> Continue</button>

{/* Sign Up Start */}

             {editSignUp && (
                <div className={header.formContent}>
                  <SignUp registration={(data) => props.registration(data)} />
            
                </div>
              )}
              {!props.auth && (
                <button
                  onClick={() => setEditSignUp(!editSignUp)}
                  className={style.sign}
                  className={style.button_continue}
                  type="submit"
                >
                  Sign up
                </button>
              )}


{/* Sign Up Finish */}





   
                <br/>
              
                <br />
              </div>
              {/* <span className="button_containe">
                <button className="btn_but" type="submit">
                  Log in
                </button>
              </span> */}
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default Login;
