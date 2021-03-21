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
import { withRouter } from "react-router-dom";

// function reducer(state,action){
//   switch(action.type){
//     case"increment":
//     return { count:state.count+1 }
//     case "decrement":
//       return { count:state.count-1 }

//   }

// }

let arr= []

const Search = (props) => {
// console.log(props)

let sum = props.product.basket.reduce((acc, el) => acc+(parseFloat(el.product.price)*parseInt(el.count)),0)
let item = props.product.basket.reduce((acc, el) => acc+parseInt(el.count),0)
console.log(item)
// console.log(sum)
// let productObj =
// props.product.basket && props.product.basket.find((el) => el.count == props.match.params.count);
//   console.log(productObj)

let data = (props.count.count+1) * props.count.price

// console.log(arr)
//  props.count && arr.push(data)

// newArr.concat(arr, ...  )
// console.log(arr)

// display all values
//   for (var i = 0; i < arr.length; i++) {
//   // console.log("all",arr[i]);
// }


  const [count, setCount] = useState(props.count.count);
  const [editMode, setEditMode] = useState(false);


let add = props.count.count
  function increment() {
    // dispatch({type:'increment'})
    setCount((count) => count + 1);
  }
  function decrement() {
    //  dispatch({type:'decrement'})
    setCount((count) => (count <= 0 ? 0 : count - 1));
  }

  return (
    <>
      <div className={style.container_search}>


    {/* Total conclusion start */}

        <div className={!editMode ? search.basket : search.basket_hidden}>

          {/* Total Item start */}

          <div className={search.total_item}>
            {" "}
            <IoBagAddOutline icon={IoBagAddOutline} size="19px" />{" "}
            <div className={search.total_items}>{item} items</div>
            <AiOutlineClose
              icon={AiOutlineClose}
              size="15px"
              className={search.biminus}
              onClick={() => setEditMode(!editMode)}
            />
          </div>

           {/* Total Item finish */}

     {/* Detailed Basket  start */}
   
     { 
     
     props.product.basket && props.product.basket.map(el => 

          <div className={search.detailed_info}>
            <div className={search.detailed_info_sub}>
              <div className={search.conclusion_sub}>
                <div>
                  {" "}
                  <BiPlus 
                  onClick={increment} style={{ marginTop: "7px" }}/>
                </div>
                <div className={search.conclusion_number}>{ el.count+1}</div>
                <div>
                  <BiMinus onClick={decrement} />
                </div>
              </div>


              
              <img
                src={el.product.main_image}
                width="60px"
                height="60px"
                style={{ marginTop: "4%", marginLeft: "5%" }}
                alt=""
              />
              <div className={search.conclusion_detailed_sub}>
              
                <div>
               {el.product.title }<br />
              {el.product.unit}
                </div>

                <div>{el.product.price}$</div>

                <div style={{ fontSize: "13px" }}> {el.count+1}X1 pc(s)</div>



                
            
              </div>
              <div
                style={{
                  fontSize: "15px",
                  marginLeft: "5.5%",
                  marginTop: "35px",
                }}
              >
           {(el.count+1 ) * el.product.price}$
              </div>
           { <AiOutlineClose
                onClick = {() => {props.deleteBasket(el.id);
                props.getBasket()
                }}
             
                size="15px"
                // style={{ marginLeft: "0.5%", marginTop: "35px" }}
                className={search.mobile_close}
              />}
            </div>
          </div>
          )}

{/* Detailed Basket finish */}

       
        </div>

        {/*check out for mobile start */}

        <div className={search.conclusion_mobile}>
          <div className={search.mobile_demos}>
            <div>D</div>
            <div>E</div>
            <div>M</div>
            <div>O</div>
            <div>S</div>
          </div>
         <div className={search.sub_mobile.conclusion}>  
          <div className={search.div_1} onClick={() => setEditMode(!editMode)}>
            <div className={style.sub_div_1}>
              <IoBagAddOutline
                style={{ marginTop: "2px", display: "inline-block" }}
                icon={IoBagAddOutline}
                size="15px"
              />{" "}
              <span style={{ marginLeft: "4px" }}>5 items</span>
            </div>
          </div>
          <div className={search.div_2_mobile}>
            {" "}
            <div style={{ marginTop: "10%" }}> {data.toFixed(2)} $</div>{" "}
            </div>
          </div>{" "}
        </div>

        {/*check out for mobile finish */}


          {/* Total conclusion finish */}


          {/* check out for generally start */}

        <div className={search.conclusion}>
          <div className={search.demos}>
            <div>D</div>
            <div>E</div>
            <div>M</div>
            <div>O</div>
            <div>S</div>
          </div>
          <div className={search.div_1} onClick={() => setEditMode(!editMode)}>
            <div className={style.sub_div_1}>
              <IoBagAddOutline
                style={{ marginTop: "2px", display: "inline-block" }}
                icon={IoBagAddOutline}
                size="15px"
              />{" "}
              <span style={{ marginLeft: "4px" }}>{item} <span  className={style.items}> Items </span    >     </span>
            </div>
          </div>
          <div className={search.div_2}>
            {" "}
            <div  className= {search.mobile_price} > <div className= {search.total_price}>{sum} $ </div>    </div>{" "}
          </div>{" "}
        </div>
        
         {/* check out for generally finish */}
      
      
      </div>
    </>
  );
};

export default withRouter(Search);
