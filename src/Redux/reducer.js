import * as types from "./action";

const initstore = {
  tshirts: [],
  cart: [],
};

export const Reducer = (store = initstore, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TSHIRTS:
      return {
        ...store,
        tshirts: payload,
      };

    case types.ADD_TO_CART:
        console.log(payload)
        return { ...store, cart: [ ...store.cart,{ ...payload }] };

    case types.REMOVE_FROM_CART:
      return{
        ...store,
        cart:store.cart.filter((c)=>c.id !==payload)
      }

    default:
      return store;
  }
};