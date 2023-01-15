import * as types from "./action";

const initstate = {
  tshirts: [],
  cart: [],
};

export const Reducer = (oldstate = initstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TSHIRTS:
      return {
        ...oldstate,
        tshirts: payload,
      };

    case types.ADD_TO_CART:
        console.log(payload)
        return { ...oldstate, cart: [ ...oldstate.cart,{ ...payload }] };

    case types.REMOVE_FROM_CART:
      return{
        ...oldstate,
        cart:oldstate.cart.filter((c)=>c.id !==payload)
      }

    default:
      return oldstate;
  }
};