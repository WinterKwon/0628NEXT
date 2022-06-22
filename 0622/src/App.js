import "./App.css";
// import {useSelector, useDispatch} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Left3</h1>
      <button
        onClick={() => {
          // dispatch({type:'UP', step:2})
          dispatch({type:'UP', step:2})
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
      <Right2></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3(props) {
  // useSelector(state =>{console.log(state)})  //state안의 value 확인하고
  const value =  useSelector(state =>{
    return state.value;
  })
  return (
    <div>
      <h1>Right3</h1>
      {value}
    </div>
  );
}
export default function App() {

  return (
    <div id="app">
      <h1>Root</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Left1></Left1>
        <Right1></Right1>
      </div>
    </div>
  );
}