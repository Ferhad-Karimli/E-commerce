import React, { Component, useState, useReducer } from "react";
import photo from "../Image/download.jpeg";
import picture from "../Image/download.svg";
import style from "../Header/Header.module.css";
import cake from "../Image/cake.png";
import Grocery from "react-select";
import { IoBagAddOutline } from "react-icons/io5";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import search from "../Header/Search.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import Typewriter from 'typewriter-effect';
// import ReactJsTyping from 'reactjs-typing-effect';
// function reducer(state,action){
//   switch(action.type){
//     case"increment":
//     return { count:state.count+1 }
//     case "decrement":
//       return { count:state.count-1 }

//   }

// }

const SearchHeader = () => {
  // console.log(props.product.basket)
  const [count, setCount] = useState(0);
  // // let data= count * props.basketInfo.product.price
  // console.log(data)
  const [editMode, setEditMode] = useState(false);
  // const [count,dispatch]= useReducer(reducer,0)

  function increment() {
    // dispatch({type:'increment'})
    setCount((count) => count + 1);
  }
  function decrement() {
    //  dispatch({type:'decrement'})
    setCount((count) => (count <= 0 ? 0 : count - 1));
  }





  // const content =()=>{
  //   const message =["Get Your Bakery Items Delivered"];

  //   let i =0 ;
  //   for(i=0; i<message.length;i++){
  //       return(
  //       <div className={style.background}>
  //       <h1 className={style.typewriter}>
  //         {message[i]}	
  //       </h1>
  //       </div>
  
  //       )
  
  //   }
    
  // }


  // const list=['Get Your Bakery Items Delivered']
  // render(){
  //     <div style={{ fontSize: 20, color: '#2196F3'}}>
  //     <ReactJsTyping StringList={list} speed={500}/>
  //      </div>
  //  }



  return (
    <>



      <div className={style.container_search}>


    {/* Total conclusion start */}

        <div className={!editMode ? search.basket : search.basket_hidden}>

    

     
          {/* <div className={search.detailed_info}>
            <div className={search.detailed_info_sub}>
              <div className={search.conclusion_sub}>
                <div>
                  {" "}
                  <BiPlus style={{ marginTop: "7px" }} />
                </div>
                <div className={search.conclusion_number}>2</div>
                <div>
                  <BiMinus />
                </div>
              </div>
              <img
                src={cake}
                width="60px"
                height="60px"
                style={{ marginTop: "4%", marginLeft: "5%" }}
                alt=""
              />
              <div className={search.conclusion_detailed_sub}>
                <div>
                  Chocolate Chip Cookie, <br />
                  250gr
                </div>
                <div>4$</div>
                <div style={{ fontSize: "13px" }}>1X1 pc(s)</div>
              </div>
              <div
                style={{
                  fontSize: "15px",
                  marginLeft: "5.5%",
                  marginTop: "35px",
                }}
              >
                4$
              </div>
              <AiOutlineClose
                icon={AiOutlineClose}
                size="19px"
                style={{ marginLeft: "5.5%", marginTop: "35px" }}
              />
            </div>
          </div>
 */}

          


          
       
       
        </div>

        {/*check out for mobile */}

        <div className={search.conclusion_mobile}>
          <div className={search.mobile_demos}>
            <div>D</div>
            <div>E</div>
            <div>M</div>
            <div>O</div>
            <div>S</div>
          </div>
         
         
        </div>

        {/*check out for mobile finish */}


          {/* Total conclusion finish */}

        <div className={search.conclusion}>
          <div className={search.demos}>
            <div>D</div>
            <div>E</div>
            <div>M</div>
            <div>O</div>
            <div>S</div>
          </div>
        
       
        </div>
        <div className={style.title_responsive}>
        <p className={style.paragraph_responsive}>Get Your Bakery Items Delivered</p>
        <p className={style.responsive_bakery}  >  <div className={style.bakery_dot}></div>Bakery</p>
        </div>
       <h2 className={style.grocery}>
        
          
          <bold   className={style.bold_responsive}> 
         
              {/* <div style={{ fontSize: 45, color: '#0D1136'}}>
       <ReactJsTyping StringList={list} speed={700}/>
  </div>
   */}
<div>
<Typewriter
onInit={(typewriter)=> {
  typewriter
.typeString("Get Your Bakery Items Delivered")
.pauseFor(2000)
.deleteAll()
.start()

}}/>
    </div>      
          
          
             </bold>
        </h2>
        <p className={style.paragraph}>
          Get your favorite bakery items baked and delivered to your doorsteps
          at any time
        </p>
        <div className={style.sub_container}>
        <AiOutlineSearch className={style.responsive_icon} icon={AiOutlineSearch} size="17px" />

          <div className={style.container_search_grocery}>Bakery
          
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Searchs products from here"
            className={style.input}
          />

          <div className={style.search}>
            <div className={style.icon}>
              <AiOutlineSearch icon={AiOutlineSearch} size="25px" />
            </div>

            <div className={style.name}>Search</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchHeader;
