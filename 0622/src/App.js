import "./App.css";
import {useSelector, useDispatch} from 'react-redux';
import countUp, {setAsync, upAsync} from './countUpSlice';
import countDown from './countDownSlice';
import {useEffect} from 'react';

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
 
  const dispatch = useDispatch();
  const countUpValue = useSelector(state=>state.countUp.value);

  
  return (
    <div>
      <h1>Left3</h1>
      <button
        onClick={async () => {
        
        dispatch(upAsync(2));
      
        }}
      >
        +
      </button>
      <button onClick = {
        ()=>{
          dispatch(countDown.actions.down(2))
        }
      }>
        -
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
  useSelector(state =>{console.log(state)})  //state안의 value 확인-> 이번에는 countup 안에 value 확인 가능
  const countUpValue =  useSelector(state =>{
    return state.countUp.value;
  })
  const countDownValue = useSelector(state=>{
    return state.countDown.value;
  }) 

  return (
    <div>
      <h1>Right3</h1>
      {countUpValue} | {countDownValue}
    </div>
  );
}
export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setAsync());
  },[]);
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