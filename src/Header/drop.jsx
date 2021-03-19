import React from 'react'
import { withRouter } from "react-router-dom";



 function Drop(props) {
     console.log(props)
    return (
        <div  style={{ cursor:"pointer"}}   >
            <ul>
                <li>Profile</li>
                <li>Your Order</li>
                <li>Log Out</li>
                <li>Terms and Services</li>
                <li>Privacy policy</li>
                <li  
                onClick={() => props.LogOut(props.history.push)}> Log Out</li>   
            </ul>
        </div>
    )
}


export default  withRouter(Drop)

