import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Model from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Model />}
      <Navbar />
      <CardContainer />
    </main>
  );
};
export default App;