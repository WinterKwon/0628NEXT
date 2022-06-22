import "./App.css";
import {useReducer} from 'react';

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 onUp={() => {
          props.onUp();
        }}
></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3
        onUp={() => {
          props.onUp();
        }}
      ></Left3>
    </div>
  );
}
function Left3(props) {
  return (
    <div>
      <h1>Left3</h1>
      <button
        onClick={() => {
          props.onUp();
        }}
      >
        +
      </button>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2  count={props.count}></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3  count={props.count}></Right3>
    </div>
  );
}
function Right3(props) {
  return (
    <div>
      <h1>Right3</h1>
      {props.count}
    </div>
  );
}
// //App()외부로 분리시킴
// function countReducer (state, action) {
//   if (action.type === "UP") {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// };

export default function App() {
  const countReducer = (state, action) => {
    if (action.type === "UP") {
      return { ...state, value: state.value + action.step };
    }
    return state;
  };
  const initialState = {
    value: 0
  };
  const [count, dispatch] = useReducer(countReducer, initialState);
  const up = (step) => {
    return { type: "UP", step: step };
  };  //action creator (redux의 용어. useReducer에서 쓰지는 않음)

  return (
    <div id="app">
      <h1>Root</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Left1 onUp={
          ()=>{
            dispatch(up(1));  //dispatch안에 {type: 'up', step : 1} 이런 로직을 위의 up 로직->action으로 분리
          }
        }></Left1>
        <Right1 count={count.value}></Right1>  
      </div>
    </div>
  );
}
