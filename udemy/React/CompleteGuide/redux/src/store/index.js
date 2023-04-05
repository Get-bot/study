import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// 상수를 사용하면 오타를 줄일 수 있다.
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const TOGGLE = "toggle";

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === TOGGLE) {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
