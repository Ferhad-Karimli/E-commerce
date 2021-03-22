import React, { Component } from "react";
import photo from "../Image/download.jpeg";
import f_photo from "../Image/flag.png";
import picture from "../Image/download.svg";
import style from "../Header/Header.module.css";
import Grocery from "react-select";
import Drop from "./drop";
import { useState, useEffect } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import Droplanguage from "../Header/Droplanguage";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
import { registration, loginAction, getUser,LogOut } from "../redux/actions";
import { connect } from "react-redux";
import DropGamburgerMobile from "./DropGamburgerMobile";
import { withRouter } from "react-router-dom";

const options = [
  { label: "Grocery", value: "Grocery" },
  { label: "Grocery Two", value: "Grocery Two" },
  { label: "Bakery", value: "Bakery" },
  { label: "Make up", value: "Make up" },
];

const Header = (props) => {

// Hooks start

  const [editMode, setEditMode] = useState(true);
  const [editLanguage, setEditLanguage] = useState(false);
  const [editSignUp, setEditSignUp] = useState(false);
  const [editLoginUp, setEditLoginUp] = useState(false);
  const [editGamburger, seteditGamburger] = useState(false);
  const [editLanguageMobile,setEditLanguageMobile]=useState(false)
  const [value, setValue] = useState('initial');
  const [navbar, setNavbar] = useState(false);
  const [navbarContainer, setNavbarContainer] = useState(false);

  // Hooks Finish


useEffect(() => {
  // This effect uses the `value` variable,
  // so it "depends on" `value`.
  props.getUser()
  // props.auth && setEditMode(!editMode)

},[ props.getUser() ])  

// Funcion for scroll event  start

  const getLength = () => {

    if (window.scrollY >350) {
      setNavbar(true)
      setNavbarContainer(true);
      // console.log(window.scrollY)
    } else {
      setNavbar(false);
      setNavbarContainer(false);
    }
  };

  window.addEventListener("scroll", getLength, setNavbarContainer);

  // Funcion for scroll event  finish 

  return (
    <>

      <div className={navbarContainer  &&  style.main_container}>
        <div
          // className={
          //   navbarContainer ? "style.container" : " style.active_container"
          // }
        >
          <div className={style.container}>
          
            {/* for 990px gamburger start */}

            <div className={style.gamburger}
              onClick={() => seteditGamburger(!editGamburger)}>
              <div></div>
              <div className={style.second_div } ></div>
              <div></div>
            </div>

 {/* for 990px gamburger finish */}


{/* for less than 990px logo start */}
          
            <img src={picture} className={style.logo_responsive} alt="" />

            {/* for less than 990px logo finish*/}


{/* hidden_gamburger menu for less than 990 px start */}

            {editGamburger && (
              <div className={style.basket_hidden_mobile}>
                
                <AiOutlineClose
                style={{ marginLeft:"11%" , marginTop:"5%" ,width:"19px" ,color: "rgb(119, 121, 140)"}}

                  onClick={() => seteditGamburger(!editGamburger)}
                />
                < DropGamburgerMobile 
                 LogOut={(callback) => props.LogOut(callback)}
                
                />
              </div>
            )}

{/* hidden_gamburger menu for less than 990 px finish */}


   


            {/* for less than 600px  language start  */}


            <img
            onClick={() => setEditLanguageMobile(!editLanguageMobile)}
              // className={style.for_mobile}
              src={f_photo}
              className={style.image_mobile}
              width="24px" 
              height="15px"
              alt=""
            />


{editLanguageMobile && (
                <div className={style.drop_language_mobile}>
                  <Droplanguage />
                </div>
              )}
            

            {/* for less than 600px  language finish */}


            <div className={style.header_left}>
              <img src={picture} className={style.logo} alt="" />
              <div className={style.dropdown}>
                <Grocery
                  icon={RiShoppingBasket2Line}
                  placeholder="Bakery"
                  options={options}
                />
              </div>
            </div>


            {/* input text for scroll events start */}

            {/* <div className={! navbar ? 'style.active' :  'style.main_input_up '}>  */}
         
            {/* <div className={ !navbar &&  style.active}>
              <AiOutlineSearch
               
                className={style.main_icon}
                icon={AiOutlineSearch}
               
              />
              <input
                type="text"
                className={style.input_up}
                value="Seach Products from Here"
              />
            </div> */}

   {/* input text for scroll events finish */}

            <div className={style.header_right}>
              <p className={style.offer}>Offer</p>
              <div className={style.main_question}>
                {" "}
                <div className={style.question}>
                  <AiFillQuestionCircle
                    style={{ marginRight: "3px", marginBottom: "4px" }}
                    icon={AiFillQuestionCircle}
                    size="19px"
                  />
                </div>
                Need Help
              </div>

              {/* <button onClick={() => props.getUser()}> Look</button> */}
            

              <div
                className={style.language_div}
                onClick={() => setEditLanguage(!editLanguage)}
              >
                <span className={style.span_language}>
                 
                  <img
                    src={f_photo}
                    width="22px"
                    height="12.69px"
                    alt=""
                  />{" "}
                  English
                </span>
              </div>
              {editLanguage && (
                <div className={style.drop_language}>
                  <Droplanguage />
                </div>
              )}

              {/* User Image */}

              {props.profilInfo &&
                (props.auth && (
                  <img
                    src={props.profilInfo.image}
                    className={style.header_image}
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%", cursor: "pointer" }}
                    alt=""
                    onClick={() => setEditMode(!editMode)}
                  />
                ))}

              {/* User Image */}

              {editLanguage && (
                <div className={style.drop_language}>
                  <Droplanguage />
                </div>
              )}
              {editLoginUp && (
                <div className={style.formContent}>
                  <Login 
                  loginAction={(data) => props.loginAction(data)}
                  signUpClose = {props.signUpClose}
                  
                  
                  registration={(data) => props.registration(data)}
                   auth={props.auth}
                  
                  />

                  <AiOutlineClose
                    onClick={() => setEditLoginUp(!editLoginUp)}
                  />
                </div>
              )}

              {/* Join Start */}

              {!props.auth && (
                <button
                  onClick={() => 
                    setEditLoginUp(!editLoginUp) }
                  className={style.join}
                >
                  Join
                </button>
              )}

              {/* Join Finish  */}


              {/*  Close icon for Log in start  */}

              {editLoginUp && (
                <div className={style.close_icon}>
                  <AiOutlineClose
                    // onClick={() => setEditSignUp(!editSignUp)}
                    // style={{ display: "block" }}
                    icon={AiFillQuestionCircle}
                    size="18px"
                    onClick={() => setEditLoginUp(!editLoginUp)}
                  />
                </div>
              )}

    {/*  Close icon for Log in  finish */}
            

              {/* Log in start */}

            


              {editLoginUp && (
                <div className={style.formContent}>
                  <Login loginAction={(data) => props.loginAction(data)} />

                  <AiOutlineClose
                    onClick={() => setEditLoginUp(!editLoginUp)}
                  />
                </div>
              )}

              {/* {!props.auth && <button 
             onClick={() => setEditLoginUp(!editLoginUp)}
            className={style.login}>Login</button>} */}

              {/* Log in finish */}

              {/* Close Icon for Sign up  start */}

              {editSignUp && (
                <div className={style.close_icon}>
                  <AiOutlineClose
                    // onClick={() => setEditSignUp(!editSignUp)}
                    // style={{ display: "block" }}
                    icon={AiFillQuestionCircle}
                    size="18px"
                    onClick={() => setEditSignUp(!editSignUp)}
                  />
                </div>
              )}

              {/* Close Icon for Sign up  finish */}


{/* Sign Up start */}

              {editSignUp && (
                <div className={style.formContent}>
                  <SignUp registration={(data) => props.registration(data)} />
                
                </div>
              )}
              {!props.auth && (
                <button
                  onClick={() => setEditSignUp(!editSignUp)}
                  className={style.sign}
                >
                  Sign up
                </button>
              )}
            </div>
          </div>


{/* Sign Up Finish */}

          {editMode ? null : (
            <div className={style.drop}   onClick={() => setEditMode(!editMode)}       >
              <Drop    LogOut={(callback) => props.LogOut(callback)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

let mapsStateToProps = (state) => {
  return {
    auth: state.productsInfo.auth,
    profilInfo: state.productsInfo.info,
    userInfo: state.productsInfo,
    signUpClose:state.productsInfo.signUpClose
    
  };
};


export default connect(mapsStateToProps, {
  registration,
  loginAction,
  getUser,
  LogOut
})  (withRouter ((Header)) )
