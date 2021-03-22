import {
    DELETE_PRODUCT,
    GET_BASKET,
    GET_CATEGORIES,
    GET_Categories_BY_ID,
    GET_COUNT,
    GET_PRODUCTS,
    GET_USER,
    IS_AUTH,
    PROFIL_INFO,
    SIGN_UP_CLOSE
} from "./types"
import axios from 'axios';
// import decode from 'jwt-decode' ;




export let getProducts = () => (dispatch) => {
    axios
        .get("https://mars-ecommerce3.se-pro.site/api/products/")
        // .then(data => console.log(data))
        .then((resp) => {
            dispatch({
                type: GET_PRODUCTS,
                payload: resp.data.products
            })
        })
}

export let getCategories = () => (dispatch) => {

    axios.get("https://mars-ecommerce3.se-pro.site/api/categories/")
        .then((resp) => {
            dispatch({
                type: GET_CATEGORIES,
                payload: resp.data
            })
        })
}

export let getCategoriesById = (id) => (dispatch) => {
    console.log(id)
    axios.get(`https://mars-ecommerce3.se-pro.site/api/products/?category=${id}`)
        .then((resp) => {
            console.log(resp)
            dispatch({
                type: GET_PRODUCTS,
                payload: resp.data.products
            })
        })
}


export let registration = (data) => (dispatch) => {
    dispatch({
        type:SIGN_UP_CLOSE,
        payload:null
    })
    axios.post('https://mars-ecommerce3.se-pro.site/accounts/api/register/', data)
        .then(res => {
            console.log(res)
            dispatch({
                type:SIGN_UP_CLOSE,
                payload:false
            })
        })

        //     localStorage.setItem('user-info', res)
        //     })

        .catch(err => {
            alert("Please, fill in all lines properly", err)
        })
        .finally(() => alert( " You have been registered succesfully."));

}

export let loginAction = (data) => (dispatch) => {

    console.log(data)
    axios.post('https://mars-ecommerce3.se-pro.site/accounts/api/login/', data)
        .then(res => {


            axios.defaults.headers.common['Authorization'] = `Token ${res.data.token}`

            dispatch({
                type: IS_AUTH,
                payload: res.data.token
            })

            localStorage.setItem('token', res.data.token)

        })

        //     localStorage.setItem('user-info', res)
        //     })

        .catch(err => {
            console.log("error found", err)
        })
        


        .finally(() => alert( " You have been logged in succesfully."));

}


export const addProduct = ( values) =>   {

    console.log (values)

    axios.defaults.headers.common['Content-Type'] = `multipart/form-data`;
    console.log(values)
axios.post('https://mars-ecommerce3.se-pro.site/api/products/',values)

.then((resp) => {
    alert("addProduct" ,resp)

})
.catch(err => {
    alert(err)
})

}






export const LogOut = callback => dispatch => {
   
    window.localStorage.clear(); 
     callback("/e-commerce/")


    dispatch({
        type: IS_AUTH,
        payload: null
    })

}




export const checkToken = token => dispatch => {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    dispatch({
        type: IS_AUTH,
        payload: token
    })

}


export const getUser = () => dispatch => {
    axios.get("https://mars-ecommerce3.se-pro.site/accounts/api/user-profile/")
        .then((resp) => {
          
            dispatch({
                type: GET_USER,
                payload: resp.data
            })
        })
}

export const addBasket = (count, id,price) => dispatch => {
    let addedData={}
    let data = {}

    console.log(count, id)
    data.product = id
    data.count = count

   
    addedData.price=price
    addedData.count = count
    console.log("addeddata",addedData)

    console.log(data)


    axios.post("https://mars-ecommerce3.se-pro.site/api/basket/", data)
    .then(
   
    dispatch({
        type: GET_COUNT,
        payload: addedData
    }))
   
     
        .catch(err => {
            alert("Dear customer, please, Log in for shopping. ", err)
        })
}

// export const getBasket =  dispatch => {
//       axios.get("https://mars-ecommerce3.se-pro.site/api/basket/")
//       .then(el => {
//           console.log(el)
//         dispatch({type:GET_BASKET, payload:el.data})
//       })

//   }

export const getBasket = () => (dispatch) => {


    axios.get("https://mars-ecommerce3.se-pro.site/api/basket/")
        .then(el => {
            console.log(el.data.id)
            //   const result = el.data.filter(id )
            dispatch({
                type: GET_BASKET,
                payload: el.data
            })
        })
}

export const deleteBasket = (id) => (dispatch) => {
    console.log(id)

    axios.delete(`https://mars-ecommerce3.se-pro.site/api/basket/${id}/`)
        .then(el => {


            dispatch({

                type: DELETE_PRODUCT,
                payload: el.data
            })
        })
}


