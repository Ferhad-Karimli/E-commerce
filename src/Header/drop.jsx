import React from 'react';
import { withRouter } from "react-router-dom";



 function Drop(props) {
     console.log(props)
    return (
        <div  style={{ cursor:"pointer"}}   >
            <ul>
                <li
            onClick={() =>props.history.push("/e-commerce/")}> 


                Profile</li>
            
                <li  
            
            onClick={() =>props.history.push("/e-commerce/Addproduct/")}> Add Product</li>




            
                <li
             onClick={() =>props.history.push("/e-commerce/detailed/1")}    
                
                >Detailed Product</li>
              
                <li  
                onClick={() => props.LogOut(props.history.push)}> Log Out</li>   
            </ul>
        </div>
    )
}


export default  withRouter(Drop)

