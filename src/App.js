import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Model from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";

const App = () => {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Model />}
      <Navbar />
      <CardContainer />
    </main>
  );
};
export default App;