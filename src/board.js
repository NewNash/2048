import React from 'react'
import './static/board.css'
class Board extends React.Component{
    componentDidMount() {
        window.addEventListener('keydown',this.props.handleKeydown)
    }
    // componentWillUnmount() {
    //     window.removeEventListener('keydown',this.props.handleKeydown)
    // }

    render() {
       const boards = this.props.numbers
        return(
            <div className="BoardContainer">
               {/*{ boards.map((row,index)=>(*/}
               {/*    <div className="BoardRow" key={index}>*/}
               {/*        {row.map((cell,index)=>(*/}
               {/*            <div className="BoardCell" key={index}>*/}
               {/*                {cell===0?"":cell}*/}
               {/*            </div>*/}
               {/*        ))}*/}
               {/*    </div>*/}
               {/*))}*/}
                <div className="BoardRow">
                    <div className="BoardCell">{boards[0][0]}</div>
                    <div className="BoardCell">{boards[0][1]}</div>
                    <div className="BoardCell">{boards[0][2]}</div>
                    <div className="BoardCell">{boards[0][3]}</div>
                </div>
                <div className="BoardRow">
                    <div className="BoardCell">{boards[1][0]}</div>
                    <div className="BoardCell">{boards[1][1]}</div>
                    <div className="BoardCell">{boards[1][2]}</div>
                    <div className="BoardCell">{boards[1][3]}</div>
                </div>
                <div className="BoardRow">
                    <div className="BoardCell">{boards[2][0]}</div>
                    <div className="BoardCell">{boards[2][1]}</div>
                    <div className="BoardCell">{boards[2][2]}</div>
                    <div className="BoardCell">{boards[2][3]}</div>
                </div>
                <div className="BoardRow">
                    <div className="BoardCell">{boards[3][0]}</div>
                    <div className="BoardCell">{boards[3][1]}</div>
                    <div className="BoardCell">{boards[3][2]}</div>
                    <div className="BoardCell">{boards[3][3]}</div>
                </div>
            </div>
        )
    }
}
export default Board