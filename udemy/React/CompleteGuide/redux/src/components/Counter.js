import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT, TOGGLE } from '../store/index';


const Counter = () => {
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector((state) => state);
  const incrementHandler = (amount) => {
    dispatch({ type: INCREMENT, amount });
  };

  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler.bind(null,1)}>Increment</button>
        <button onClick={incrementHandler.bind(null,5)}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;