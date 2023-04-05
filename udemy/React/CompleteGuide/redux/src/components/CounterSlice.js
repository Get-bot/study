import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/sliceIndex";
import classes from "./Counter.module.css";


const Counter = () => {
  const dispatch = useDispatch();
  const {counter, showCounter} = useSelector((state) => state.counter);

  const incrementHandler = (amount) => {
    dispatch(counterActions.increment(amount));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
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