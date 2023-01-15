import * as types from "./action";

const initstate = {
  tshirts: [],
  cart: [],
  searchProducts:[],
};

export const Reducer = (oldstate = initstate, action) => {
  const { type, payload } = action;

  switch (type) {

    // get the products
    case types.GET_TSHIRTS:
      return {
        ...oldstate,
        tshirts: payload,
        searchProducts:payload,
      };

    // add product to cart
    case types.ADD_TO_CART:
      console.log("cart", payload);
      return { ...oldstate, cart: [...oldstate.cart, { ...payload }] };

    // remove product from cart
    case types.REMOVE_FROM_CART:
      return {
        ...oldstate,
        cart: oldstate.cart.filter((c) => c.id !== payload),
      };

    // search filteration
    case types.SEARCH_FILTER:
      return {
        ...oldstate,
        tshirts:oldstate.searchProducts.filter((s)=>(
            s.name.toLowerCase()===payload 
            || s.color.toLowerCase()===payload 
            || s.type.toLowerCase()===payload
        ))
      };

    //   left side All filteration
      case types.LEFT_SIDE_FILTER: {
        if (payload === "0-250") {
          return {
            ...oldstate,
            tshirts: oldstate.tshirts.filter((f) => f.price <= 250),
          };
        } else if (payload === "252-450") {
          return {
            ...oldstate,
            tshirts: oldstate.tshirts.filter(
              (f) => f.price > 250 && f.price <= 450
            ),
          };
        } else if (payload === "450") {
          return {
            ...oldstate,
            tshirts: oldstate.tshirts.filter((f) => f.price > 450),
          };
        } else {
          return {
            ...oldstate,
            tshirts: oldstate.tshirts.filter((f) =>
                f.color === payload 
                || f.type === payload 
                || f.gender === payload
            ),
          };
        }
      }
    default:
      return oldstate;
  }
};
