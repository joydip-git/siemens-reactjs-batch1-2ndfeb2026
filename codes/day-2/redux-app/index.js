const { legacy_createStore } = require("redux");

//initial state
const initialCounterState = {
  counter: 0,
};

//action types
const actionTypes = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
};

//action creator functions
const increaseActionCreator = (data = 1) => {
  return {
    type: actionTypes.INCREASE,
    payload: data,
  };
};

const decreaseActionCreator = (data = 1) => {
  return {
    type: actionTypes.DECREASE,
    payload: data,
  };
};

//reducer
const counterReducer = (prevState = initialCounterState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return {
        ...prevState,
        counter: prevState.counter + action.payload,
      };

    case actionTypes.DECREASE:
      return {
        ...prevState,
        counter: prevState.counter - action.payload,
      };

    default:
      return {
        ...prevState,
      };
  }
};

//store
const store = legacy_createStore(counterReducer);


//subscriber code
console.log(store.getState());

const increaseByTwoAction = increaseActionCreator(2);
store.dispatch(increaseByTwoAction);
console.log(store.getState());

const decreaseByOneAction = decreaseActionCreator(1);
store.dispatch(decreaseByOneAction);
console.log(store.getState());
