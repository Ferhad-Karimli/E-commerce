import React from "react";
import style from "./Main.module.css";
import Main from "../Main/Main";
import {
  //   addPostAction,
  //   updatePostAction,
  //   getUsers,
  //   deletePostAction,
  //   UpdatedUserInfoAction,
  //   getPosts,
  getProducts,
  getCategories,
  getCategoriesById,
  checkToken,
  addBasket,
  getUser,
  getBasket,
  deleteBasket,
  // clearProfileDate
} from "../redux/actions";
import { connect } from "react-redux";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import Search from "../Header/Search";

class MainPageContainer extends Component {
  componentDidMount() {
    this.props.productsInfo.auth &&
    this.props.checkToken(this.props.productsInfo.auth);
    this.props.getProducts();
    this.props.getCategories();
    this.props.productsInfo.auth && this.props.getBasket();
    this.props.productsInfo.auth && this.props.getUser();
  }

  render() {

    return (
      <>
        <div className={style.search}>
          <Search
            product={this.props.basketInfo}
            deleteBasket={(id) => this.props.deleteBasket(id)}
            getBasket={this.props.getBasket}
            count={this.props.count}
          />
        </div>
       
        <Main
          productsInfo={this.props.productsInfo}
          getCategoriesById={(id) => this.props.getCategoriesById(id)}
          addBasket={(count, id,price) => this.props.addBasket(count, id,price)}
          getBasket={this.props.getBasket}
          count={this.props.count}
        />
      </>
    );
  }
}

let mapsStateToProps = (state) => {
// console.log("Maps",state.basketInfo.count)
  return {
    productsInfo: state.productsInfo,
    basketInfo: state.basketInfo,
    count:state.basketInfo.count
  };
};

export default connect(mapsStateToProps, {
  getProducts,
  getCategories,
  getCategoriesById,
  checkToken,
  addBasket,
  getBasket,
  getUser,
  deleteBasket,
})(withRouter(MainPageContainer));

