import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CardContainer />
    </main>
  );
};
export default App;