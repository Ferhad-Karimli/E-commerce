import { GET_BASKET, GET_COUNT } from "../actions/types";

let initialState = {

    basket: [],
    count: {}
    

}


let basketReducer = (state = initialState, action) => {
    switch (action.type) {


        case GET_BASKET:

            return {
                ...state,
                basket:action.payload
            }
            case GET_COUNT :
                console.log(action.payload)
                // console.log(this.count)
            return {
                ...state,
               count:action.payload,
               
            }
          
                    default:
                        return state;



    }


}


export default basketReducer