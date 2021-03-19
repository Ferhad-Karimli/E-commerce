import React from 'react'
import style from '../Header/Droplanguage.module.css'
import photo from '../Image/arabic.png'
import picture from '../Image/chinise.png'
import english from '../Image/english.jpeg'
import german from '../Image/german.png'
import israil from '../Image/israil.png'
import spanish from '../Image/spanish.png'


 function Droplanguage() {
    return (
        <div>

          <div className={style.div_lan_1}>
             

          <span className={style.flag_style}>

    <img className={style.image}  src={photo} alt=""/>
</span>   <span  className={style.language_name}> Arabic</span> 



          </div>
          <div className={style.div_lan_1}>

         

<span className={style.flag_style}>

<img className={style.image}  src={picture} alt=""/>
</span>   <span  className={style.language_name}> Chinise</span> 

          </div>
          <div className={style.div_lan_1}>

          <span className={style.flag_style}>

<img className={style.image}  src={english} alt=""/>
</span>   <span  className={style.language_name}> English</span> 

          </div>
          <div className={style.div_lan_1}>

          <span className={style.flag_style}>

<img className={style.image}  src={german} alt=""/>
</span>   <span  className={style.language_name}> German</span> 


          </div>
          <div className={style.div_lan_1}>
          <span className={style.flag_style}>

<img className={style.image}  src={israil} alt=""/>
</span>   <span  className={style.language_name}> Israil</span> 

          </div>
          <div className={style.div_lan_1}>

          <span className={style.flag_style}>

<img className={style.image}  src={spanish} alt=""/>
</span>   <span  className={style.language_name}> Spanish</span> 
              


          </div>
       
        </div>
    )
}


export default Droplanguage

