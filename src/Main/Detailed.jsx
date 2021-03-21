import React, { Component, useEffect } from "react";
import photo from "../Image/sweety.jpg";
import style from "./Detailed.module.css";
import detailed from '../Main/Products.module.css'
import { BiBasket } from "react-icons/bi";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import {  AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { connect } from "react-redux"


const Detailed = (props) => {

  console.log("detailed",props)

  const [editMode, setEditMode] = useState(false);
  const [product, setProductObj] = useState(null);
  const [editCalculator, setEditCalculator] = useState(false);
  // const [count, editValue] = useState(0);
  const [detailedmode, setDetailedMode] = useState(false);
  const [editPlus, setEditPlus] = useState(true);



  const [editModeC, setEditModeC] = useState(true);
  const [detailedmodeC, setDetailedModeC] = useState(false);
  const [count, editValue] = useState(0);
  // const [counter] = useReducer(reducer, 2);
  // console.log(count)
  function decrement() {
    editValue((count) => (count <= 0 ? 0 : count - 1));
    
  }








  function decrement() {
    editValue((count) => (count <= 0 ? 0 : count - 1));
  }
  

  let productObj =
    props.product && props.product.find((el) => el.id == props.match.params.id);

  // useEffect(() => {
  //   let productObj =
  //     props.products &&
  //     props.match.params.id &&
  //     props.products.find((el) => el.id == props.match.params.id);

  //   setProductObj(productObj && productObj);
  //   console.log(productObj && productObj);
  // }, [props.products, props.match.params.id]);

  return (
    productObj && (
      <>
        <div className={style.container}>
          <div className={style.left_container}>
            <div className={style.main}>
              <div className={style.up}>
                <img
                  src={productObj.main_image}
                  style={{ marginLeft: "11.5%", marginTop: "8%" }}
                  width="70%"
                  height="450px"
                  alt=""
                />
              </div>
              <div className={style.down}>
                <img
                  src={props.products && props.products.main_image}
                  className={style.image}
                  alt=""
                />
                <img
                  src={productObj.main_image}
                  className={style.image}
                  alt=""
                />
                <img
                  src={productObj.main_image}
                  className={style.image}
                  alt=""
                />
                <img
                  src={productObj.main_image}
                  className={style.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={style.right_container}>
            <div className={style.sub_container}>
              <h1 className={style.springy_text} > {productObj.title}</h1>
              <p className={style.sub_container_price}>
                {productObj.price}$ {productObj.unit}
                <del className={style.delete}>{productObj.discount_price}</del>
              </p>

              <p className={style.paragraph}>{productObj.description}</p>

           
            </div>
           
           
           
           {/* add to card start  */}

            {   !editCalculator && <div className={style.basket}
              onClick={() => setEditCalculator(!editCalculator)}>

                
             
              <div className={style.basket_icon}>
                <BiBasket icon={BiBasket} size="17px" />
              </div>
            
              <div className={style.card_add}>Add to Card</div>

            </div>}
         
         
            { editCalculator && (
    <div className={style.basket}>
     <BiMinus
                      icon={BiMinus}
                      onClick={decrement}
                      color="white"
                      size="21px"
                      style={{ marginTop:"8%"}}
                    />

<div      style={{ marginTop:"8%"}}>   {props.count+1}</div>


<BiPlus
                
onClick= {() => {props.addBasket(count,productObj.id);
                   editValue((count) => count + 1);
                  }}
                   className={style.plus_icon}
                   style={{ marginTop:"8%"}}
                   icon={BiPlus}
                   size="21px"
              /> 
                

    
    </div>
  )}

    
         
         
         
         
         
            <button className ={style.history}  onClick={ () => props.history.push("/e-commerce/") }   >Go to Back </button>
             
         {/* add to card finish  */}
          
         
         
  
         
         {/* showing after click */}
         
          



            <div className={style.tags}>Tags : Toats,Loafs</div>
          </div>
        </div>
        <div className={style.related}>  <b>Related Items</b>  </div>

      
      
 {/* Products       */}

        <div className={style.products_container}>
{props.product && props.product.map( el=>
 

<div className={detailed.container}   
    
     
    onClick={() => 
      {setEditMode(!editMode);
    props.getCategoriesById &&  props.getCategoriesById(el.id)} }  >
      <div className={detailed.sub_container}>
        <div className={detailed.add_product}>
          <div className={detailed.discount}>
            {" "}
            <span className={detailed.persent}>10%</span>{" "}
          </div>



          {/* <div className={detailed.add}>
            <div className={detailed.after_click}>
            
              {editPlus &&  (
                <div className={detailed.plus_minus}>
                  <BiMinus
                    icon={BiMinus}
                    onClick={decrement}
                    color="white"
                    size="21px"
                  />
                </div>
              )}
              {editPlus && (
                <div className={detailed.add_product_number}>{count}</div>
              )}
            </div>
            <div className={detailed.plus}>
              <BiPlus
              

                onClick= {() =>
                  {props.addBasket(count,el.id);
                   editValue((count) => count + 1);
                   props.getBasket()}}
                   className={detailed.plus_icon}
                   icon={BiPlus}
                   size="21px"
              />
            </div>
          </div> */}


        </div>
        <Link
          to={`/e-commerce/detailed/${el.id}`}
        >
         
        
                
        <div className={detailed.image}>
          <img
            src={el.main_image}
            className={detailed.image_inside}
            width="120px"
            height="120px"
            alt=""
            // onClick={() => setDetailedMode(!editMode)}
          />
        </div>

        </Link>

        <div className={detailed.name}>{el.price}</div>

        <div className={detailed.value}>
          <div className={detailed.price}>
            {el.title}<br/>
            {el.amount_by_unit} {el.unit}
          </div>
        </div>
      </div>
    </div>


)}


        </div>
      </>
    )
  );
};




let mapsStateToProps = (state) => {
  console.log(state.basketInfo.count.price)
  return {
    price: state.basketInfo.count.price,
  };
};

export default connect(mapsStateToProps, 
  null,
)(withRouter(Detailed));

