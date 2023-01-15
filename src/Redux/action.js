// Action types

export const GET_TSHIRTS="GET_TSHIRTS"
export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"

// Action Createors

export const getProducts = () => (dispatch) => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((res) => {
        return dispatch({
          type: GET_TSHIRTS,
          payload: res,
        });
      });
  };
  
  
//   export const searchProducts =(payload)=>(dispatch)=>{
//     return (dispatch({
//       type:types.SEARCH_PRODUCTS,
//       payload:payload
//     }))
//   }
  
  export const addCart =(payload)=>(dispatch)=>{
  
      return dispatch({
          type:ADD_TO_CART,
          payload:payload
      })
  
  }
  
  
  export const removeCart =(payload)=>(dispatch)=>{
  
    return dispatch({
        type:REMOVE_FROM_CART,
        payload:payload
    })
  
  }