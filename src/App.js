// import React from 'react';
import Board from "./board";
import {move} from './action'
import {connect} from 'react-redux'

function directionDispatch(e,dispatch) {
  switch(e.keyCode){
    case 37:
      dispatch(move('left'))
      break;
    case 38:
      dispatch(move('up'))
      break;
    case 39:
      dispatch(move('right'))
      break;
    case 40:
      dispatch(move('down'))
      break;
    default:
      break;
  }
}
const mapStateToProps = state=>({
  boards:state.numbers,
  score:state.score,
  ifGameOver:state.ifGameOver,
})

const mapDispatchToProps = dispatch=>({
      handleKeydown:(e)=>{directionDispatch(e,dispatch)},
      initClick:()=>{dispatch({type:'init'})},
      cancleClick:()=>{dispatch({type: 'cancle'})}
    }
)
const App = connect(mapStateToProps,mapDispatchToProps)(Board)
export default App;
