import React, { Component } from "react";
import style from './Dropdownmenu.module.css'


class  Dropdownmenu  extends Component  {

render(){

    return( <>
    <div className={style.container}>
<p className={style.color}>Hello</p>

<ul>
    <li>Meat&Fish</li>
    <li>Snacks</li>
    <li>Pet Care</li>
    <li>Home&Cleaning</li>
    <li>Dairy</li>
    <li>Cooking</li>
    <li>Breakfast</li>
    <li>Beverege</li>
    <li>Beaty & Health</li>
</ul>
</div>
</>
    )
}
}





export default Dropdownmenu 