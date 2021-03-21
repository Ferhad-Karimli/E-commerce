import React, { Component } from "react";
import style from "./Main.module.css";
import Products from "../Main/Products";
import Dropdownmenu from "../Main/Dropdownmenu";
import Cards from "../Main/Cards";

class Main extends Component {
 
   getCategoriesById(id){
   
  }

  render() {

    // console.log("main",this.props.count)
  
    return (
   
   
      <div className={style.container}>


        <div className={style.cards}>
          <Cards categories={this.props.productsInfo.categories}
           getCategoriesById={this.props.getCategoriesById}
          />
        </div>

       
    
        <div className={style.header}>
        <div className={style.sub_header}>
          {this.props.productsInfo.products &&
  
            this.props.productsInfo.products.map((el) => (
             <Products key={el.id} productsInfo={el}
              getCategoriesById={(id ) => this.getCategoriesById(id)}
              addBasket= {(count,id,price) => this.props.addBasket(count,id,price)}
              getBasket={this.props.getBasket}
              Basket={(id) => this.props.deleteBasket(id)}
              count={this.props.count}
            

              // <Products  productsInfo={this.props.productsInfo.products}
              // getCategoriesById={(id ) => this.getCategoriesById(id)}
              // addBasket= {(count,id) => this.props.addBasket(count,id)}
              // getBasket={this.props.getBasket}
              // deleteBasket={(id) => this.props.deleteBasket(id)}
              // />


              />
            ))}
        </div>
        </div>
      </div>
    );
  }
}

export default Main;
