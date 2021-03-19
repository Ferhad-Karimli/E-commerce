import React from 'react'
import style from '../Header/DropGamburgerMobile.module.css'
import photo from '../Image/arabic.png'
import picture from '../Image/chinise.png'
import english from '../Image/english.jpeg'
import german from '../Image/german.png'
import israil from '../Image/israil.png'
import spanish from '../Image/spanish.png'
import cherri from '../Image/Cherries.jpg'
import Ferhad from '../Image/Ferhad.jpeg'
function  DropGamburgerMobile(props) {
    
    return (
        <div   className={style.container}  >

            <div className={style.user_info}>

<div className={style.sub_user_info}>
<img src={Ferhad} width="50px" height="50px" style={{ borderRadius:"50%"}}       alt=""/>
 <span className={style.info} >
     <span className={style.name}>  <b>Ferhad Kerimli </b>    </span>
     <span  className={style.number}> +994558128777</span>
 </span>
</div>
            </div>

        <div className={style.div_lan_1}>
           

        <span className={style.flag_style}>

</span>   <span  className={style.language_name}> Home</span> 



        </div>
        <div className={style.div_lan_1}>

       

<span className={style.flag_style}>


</span>   <span  className={style.language_name}> Profile</span> 

        </div>
        <div className={style.div_lan_1}>

        <span className={style.flag_style}>


</span>   <span  className={style.language_name}> Checkout</span> 

        </div>
        <div className={style.div_lan_1}>

        <span className={style.flag_style}>

</span>   <span  className={style.language_name}> Checkout Alternative</span> 


        </div>
        <div className={style.div_lan_1}>
        <span className={style.flag_style}>

</span>   <span  className={style.language_name}> Your Order</span> 

        </div>
        <div className={style.div_lan_1}>

        <span className={style.flag_style}>


</span>   <span  className={style.language_name}> Order Invoice</span> 

            


        </div>

        <div className={style.div_lan_1}>

<span className={style.flag_style}>


</span>   <span  className={style.language_name}> Terms and Services</span> 

</div>
<div className={style.div_lan_1}>

<span className={style.flag_style}>


</span>   <span  className={style.language_name}> Order Invoice</span> 

    


</div>

<div className={style.div_lan_1}>

<span className={style.flag_style}>


</span>   <span  className={style.language_name}> Need Help</span> 

    


</div>


<div className={style.div_lan_1}>

<span className={style.flag_style}>


</span>   <span  className={style.language_name}> Offer</span> 

    


</div>
     
      </div>
    )
}


export default DropGamburgerMobile