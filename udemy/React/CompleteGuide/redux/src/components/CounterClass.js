import classes from "./Counter.module.css";
import { Component } from "react";
import { connect } from "react-redux";

class CounterClass extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}
  
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

//리덕스 상태를 컴포넌트의 props로 매핑
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
}

// 리덕스 디스패치를 컴포넌트의 props로 매핑
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

  // 새함수를 만들어서 리턴
  const ConnectedCounterClass = connect(mapStateToProps, mapDispatchToProps)(CounterClass);

  export default ConnectedCounterClass;