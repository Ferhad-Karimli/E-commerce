import React, { Component, useReducer } from "react";
import style from "./Products.module.css";
import { IoMdBasket } from "react-icons/io";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import Detailed from "../Main/Detailed";
import { Link } from "react-router-dom";







const Products = (props) => {

  // Hooks start

  const [editMode, setEditMode] = useState(true);
  const [detailedmode, setDetailedMode] = useState(false);
  const [count, editValue] = useState(0);

  //Hooks Finish

  function decrement() {
    editValue((count) => (count <= 0 ? 0 : count - 1));
  }

  return (
    <>
      {!detailedmode ? null : (
        <div className={style.drop_detailed}>
          <Detailed
            products={props.productsInfo}
            addBask={(count, id) => props.addBasket(count, id)}
            count={props.count}
          />
        </div>
      )}

      <div
        className={style.container}
        onClick={() => {
          setEditMode(!editMode);
          props.getCategoriesById(props.productsInfo.id);
        }}>

        <div className={style.sub_container}>
          <div className={style.add_product}>
            <div className={style.discount}>
              {" "}
              <span className={style.persent}>10%</span>{" "}
            </div>
            <div className={style.add}>
    
    <div className={style.sub_calculator}>

           
                <div className={style.after_click}>
                  <div className={style.plus_minus}>
                    <BiMinus
                      icon={BiMinus}
                      onClick={decrement}
                      color="white"
                      size="21px"
                    />
                  </div>

                  <div className={style.add_product_number}>{count}</div>
                  <BiPlus
                  onClick={() => {
                    props.addBasket(
                      count,
                      props.productsInfo.id,
                      props.productsInfo.price
                    );
                    editValue((count) => count + 1);
                    props.getBasket();
                  }}
                  className={style.plus_icon}
                  icon={BiPlus}
                  size="21px"
                />
                </div>
              
                <div className={style.after_click_hidden}> </div>
              
    
    
    
    
    
    
     {/* { ! count > 0 &&    <div className={style.plus}>
                <BiPlus
                  onClick={() => {
                    props.addBasket(
                      count,
                      props.productsInfo.id,
                      props.productsInfo.price
                    );
                    editValue((count) => count + 1);
                    props.getBasket();
                  }}
                  className={style.plus_icon}
                  icon={BiPlus}
                  size="21px"
                />
              </div> } */}
              </div>
            </div>
          </div>
          <Link to={`/e-commerce/detailed/${props.productsInfo.id}`}>
            <div className={style.image}>
              <img
                src={props.productsInfo.main_image}
                className={style.image_inside}
                width="120px"
                height="120px"
                alt=""
                onClick={() => setDetailedMode(!editMode)}
              />
            </div>
          </Link>

          <div className={style.name}>{props.productsInfo.price}</div>

          <div className={style.value}>
            <div className={style.price}>
              {props.productsInfo.title}
              <br />
              {props.productsInfo.amount_by_unit} {props.productsInfo.unit}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
