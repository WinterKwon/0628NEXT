import "./App.css";
import {useSelector, useDispatch} from 'react-redux';
import countUp from './countUpSlice';
import countDown from './countDownSlice';

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
  function up (step){
    return {type: 'countUp/up', payload : step}
  }  //이 up 함수가 action creator 이는 툴킷 사용전
  return (
    <div>
      <h1>Left3</h1>
      <button
        onClick={() => {
          
          // dispatch({type:'UP', step:2}) redux때 사용
          // dispatch(countUp.actions.up(2))  //작동확인
          // dispatch({type: 'countUp/up', payload : 2})  //작동확인
          dispatch(up(2))  //함수로 깔끔하게. 툴킷 사용전
          dispatch(countUp.actions.up(2))  //툴킷의 createSlice에 name필드로 찾아감!
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