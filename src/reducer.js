const reducer = (state = {
    numbers: [
        [0, 0, 2, 2],
        [1, 0, 0, 0],
        [1, 2, 0, 0],
        [1, 0, 3, 0]

    ]
}, action) => {
    if (action.type === 'order') {
        switch (action.text) {
            case 'up':
                const boards = JSON.parse(JSON.stringify(state.numbers))
                if(boards[3][0]===boards[2][0]){
                    console.log(324)
                    boards[2][0]= boards[2][0]+boards[3][0]
                    boards[3][0]  = 0
                }
                state.numbers = boards
                return state
            case 'down':
                ToDown(state)
                return state
            case 'left':
                ToLeft(state)
                return state
            case 'right':
                ToRight(state)
                return state
            default:
                return state
        }
    } else {
        return state
    }
}

export default reducer
function ToUp(state){
    const boards = [].concat(state.numbers)
    console.log(boards)
    if(boards[3][0]===boards[2][0]){
        boards[2][0]= boards[2][0]+boards[3][0]
        boards[3][0]  = 0
    }
    console.log(boards)
    // state.numbers.concat(boards)
}
function ToDown(state){
    console.log(state)
}
function ToLeft(state){
    console.log(state)
}
function ToRight(state){
    console.log(state)
}