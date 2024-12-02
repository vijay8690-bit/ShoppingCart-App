import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div >
      {
        cart.length > 0 ?
          (<div className="flex flex-row space-x-96">
            <div>
              { 
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }
            </div>

            <div className="flex flex-col p-7 ">

              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p className="text-green-600 font-semibold">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div>
                <p className="text-green-600 font-semibold">Total Amount: ${totalAmount}</p>
                <button 
                className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                text-[12px] p-1 px-3 uppercase 
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in">
                  CheckOut Now
                </button>
              </div>

            </div>


          </div>) :
          (<div className="justify-center items-center">
            <h1 className="font-mono text-3xl">Cart Empty</h1>
            <Link to={"/"}>
              <button 
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase 
              hover:bg-gray-700
              hover:text-white transition duration-300 ease-in">
                Shop Now
              </button>
            </Link>
          </div>)
      }
    </div>
  );
};

export default Cart;
