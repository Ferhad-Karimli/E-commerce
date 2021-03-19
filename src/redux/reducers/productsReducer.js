import {
    GET_CATEGORIES,
    GET_PRODUCTS,
    GET_USER,
    IS_AUTH,
    PROFIL_INFO,
    SIGN_UP_CLOSE
} from "../actions/types";

let initialState = {

    products: null,
    categories: null,
    auth: localStorage.getItem('token'),
    info: null,
    signUpClose:null

}


let productsReducer = (state = initialState, action) => {
    switch (action.type) {


        case GET_PRODUCTS:

            return {
                ...state,
                products: action.payload
            }
            case GET_CATEGORIES:

                return {
                    ...state,
                    categories: action.payload
                }

                case IS_AUTH:
                    return {
                        ...state,
                        auth: action.payload
                    }
                    case GET_USER:
                        return {
                            ...state,
                            info: action.payload
                        }
                        case SIGN_UP_CLOSE:
                            return{
                                ...state,
                                signUpClose:action.payload
                            }


                       
                        default:
                            return state;



    }


}


export default productsReducer