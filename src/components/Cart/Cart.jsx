import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Redux/action";
import style from './cart.module.css'

const Cart = () => {
  const dispatch = useDispatch();
  const cartproducts = useSelector((store) => store.cart);
  console.log(cartproducts);

  // calculation for total products
  const sum = cartproducts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  // console.log(sum)

  // handling delete functionality
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      {cartproducts &&
        cartproducts.map((ele) => (
          <div key={ele.id} className={style.cart_product_box}>
            <div>
              <img src={ele.imageURL} alt="pic" className={style.cart_product_image}/>
            </div>
            <div>
              <p>{ele.name}</p>
              <p>{ele.price}</p>
            </div>
            <button>quantity:{1}</button>
            <button onClick={() => handleDelete(ele.id)}>Delete</button>
          </div>
        ))}
      <hr />
      <h3>Total:Rs.{sum}</h3>
    </div>
  );
};

export default Cart;
