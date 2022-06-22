// import { createStore } from "redux";
import {createStore} from 'redux';
// const reducer = (state, action) => {
const reducer = (state, action)=>{
    if (action.type === 'UP'){
        return {...state, value:state.value + action.step}
    }
    return state;
}
//   if (action.type === "UP") {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// };
// const initialState = {
//   value: 0
// };
// const store = createStore(reducer, initialState);
const store = createStore(reducer, {value : 0});
// export default store;
export default store;
