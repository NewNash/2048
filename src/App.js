// import React from 'react';
import Board from "./board";
import {move} from './action'
import {connect} from 'react-redux'

// let App = ({dispatch})=>{
//   function handleKeydown(e) {
//     switch(e.keyCode){
//        case 37:
//          dispatch(order('left'))
//          break;
//        case 38:
//          dispatch(order('up'))
//          break;
//        case 39:
//          dispatch(order('right'))
//          break;
//        case 40:
//          dispatch(order('down'))
//          break;
//        default:
//          console.log(`${e.key}的keycode是${e.keyCode}`)
//      }
//   }
//   window.addEventListener('keydown',handleKeydown)
//   return(
//         <div>
//             <Board />
//         </div>
//     )
// }

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.handleKeydown = this.handleKeydown.bind(this)
//   }
//   handleKeydown(e){
//     const {dispatch} = this.props
//      switch(e.keyCode){
//        case 37:
//          dispatch(order('left'))
//          break;
//        case 38:
//          dispatch(order('up'))
//          break;
//        case 39:
//          dispatch(order('right'))
//          break;
//        case 40:
//          dispatch(order('down'))
//          break;
//        default:
//          console.log(`${e.key}的keycode是${e.keyCode}`)
//      }
//   }
//   componentDidMount() {
//     window.addEventListener('keydown',this.handleKeydown)
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown',this.handleKeydown)
//   }
  // render() {
  //   return(
  //       <div>
  //           <Board numbers='23'/>
  //       </div>
  //   )
  // }
// }

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
      handleKeydown:(e)=>{directionDispatch(e,dispatch)}
    }
)
const App = connect(mapStateToProps,mapDispatchToProps)(Board)
export default App;
