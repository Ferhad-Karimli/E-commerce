import './App.css';
import Header from './Header/Header'
import MainPageContainer from './Main/MainPageContainer';
import {getBasket} from './redux/actions/index'
import { connect } from "react-redux"
import Search from './Header/Search';
import SearchHeader from './Header/SearchHeader';
import Detailed from './Main/Detailed'
import { Redirect, Route, Switch,withRouter  } from "react-router-dom";
import Products from './Main/Products';
import Addproduct from './Main/Addproduct';


function App (props) {


  return (

    <Switch>
    <div className="App">
   
      <div className="body">

<div className = "background_image">  

<Route path='/e-commerce/'>
<Header/>
</Route>

<Route  exact path='/e-commerce/' >
<SearchHeader/> 

</Route>
</div>

<div className = "background_image"> 
    
      <Route
      exact path="/e-commerce/detailed/:id?"
      render={() => <Detailed product={props.productsInfo}/>}/>
      {/* <Products/> */}

</div>

<div className = "background_image"> 
    
      <Route
      exact path="/e-commerce/Addproduct/"
      render={() => <Addproduct/>}/>
    

</div>





</div>
      
<div  className="main">

  <Route  exact  path="/e-commerce">

  <MainPageContainer/>
 </Route>
 </div>


 <Redirect from="/" to='/e-commerce/'/>
    
    </div>
    </Switch>
  );
}

let mapsStateToProps = (state) => {
  // console.log(state)
  return {
    productsInfo: state.productsInfo.products,
  };
};

export default connect(mapsStateToProps, 
  null,
)(withRouter(App));



