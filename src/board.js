import React from 'react'
import './static/board.css'

class Board extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.props.handleKeydown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.props.handleKeydown)
    }

    render() {
        const{ boards,score,ifGameOver,initClick,cancleClick} = this.props
        return (
            <div className="container">
                <div>
                    目前得分:<span className="score">{score}</span>
                    <button onClick={initClick}>restart</button>
                    <button onClick={cancleClick}>undo</button>
                </div>
                <div className="BoardContainer">

                    {boards.map((row, index) => (
                        <div className="BoardRow" key={index}>
                            {row.map((cell, index) => (
                                <div className="BoardCell" key={index}>
                                    {cell === 0 ? "" : cell}
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className={ifGameOver?"gameOver show":"gameOver hide"}>
                        GAME OVER
                    </div>
                </div>

            </div>
        )
    }
}

export default Board