// Action types

export const GET_TSHIRTS="GET_TSHIRTS"
export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"
export const SEARCH_FILTER="SEARCH_FILTER"
export const LEFT_SIDE_FILTER="LEFT_SIDE_FILTER"

// Action Createors

export const getProducts = () => (dispatch) => {
    fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("hi",data)
        return dispatch({
          type: GET_TSHIRTS,
          payload: data,
        });
      });
  };

  export const addToCart =(payload)=>(dispatch)=>{
      return dispatch({
          type:ADD_TO_CART,
          payload:payload
      })
  }
 
  export const removeFromCart =(payload)=>(dispatch)=>{
    return dispatch({
        type:REMOVE_FROM_CART,
        payload:payload
    })
  }

 export const searchFilter=(payload)=>(dispatch)=>{
    return dispatch({
        type:SEARCH_FILTER,
        payload:payload
    })
 }

 export const leftSideFilter=(payload)=>(dispatch)=>{
    return dispatch({
        type:LEFT_SIDE_FILTER,
        payload:payload
    })
 }