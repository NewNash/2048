// 每次按完键之后都要查询是否可移动来判定是否游戏结束
//可移动分为可上、可下、可左、可右

//  按 上键 =》 先 判断是否可向上，在进行去零、合并
//  其他也如此

//数组，对象，函数 的值 传入函数中，原来的值会改变
const initNumbers = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
const reducer = (state = {
    numbers:initNumbers,
    score:0,
    ifGameOver:false
}, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'move':
                switch (action.text) {
                    case 'up':
                        ToUp(newState)
                        createRandNumber(state, newState)
                        checkOver(newState)
                        return {...state, ...newState}
                    case 'down':
                        ToDown(newState)
                        createRandNumber(state, newState)
                        checkOver(newState)
                        return {...state, ...newState}
                    case 'left':
                        ToLeft(newState)
                        createRandNumber(state, newState)
                        checkOver(newState)
                        return {...state, ...newState}
                    case 'right':
                        ToRight(newState)
                        createRandNumber(state, newState)
                        checkOver(newState)
                        return {...state, ...newState}
                    default:
                        return {...state, ...newState}
                }
        case 'init':
            return {...state,numbers:initBoard(),score:0 }
        case 'cancle':
            console.log('cancle')
            return state
        default:
            return state

    }

}

export default reducer

//生成随机数
function createRandNumber(state,newState){
    for(let x=0;x<4;x++){
        for(let y=0;y<4;y++){
            //判断是有否变化，有则生成随机数
            if(state['numbers'][x][y]!==newState['numbers'][x][y]){
                const arr=[]
                for(let m=0;m<4;m++){
                    for(let n=0;n<4;n++){
                        if(newState['numbers'][m][n]===0){
                            arr.push([m,n])
                        }
                    }
                }
                const rand = arr[Math.floor(Math.random()*arr.length)]
                newState['numbers'][rand[0]][rand[1]]=Math.random()>0.1?2:4
                return
            }
        }
    }
}
//初始状态，生成一个随机数
function initBoard() {
    const arr = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    const a = Math.floor(Math.random()*arr.length)
    const b = Math.floor(Math.random()*arr.length)
    arr[a][b]=Math.random()>0.1?2:4
    return arr
}
//判断是否游戏结束
function checkOver(newState){
    //若有 0 ，未结束，退出函数
    for(let a=0;a<4;a++){
        for(let b=0;b<4;b++){
            if(newState['numbers'][a][b]===0){
                newState['ifGameOver']=false
                return
            }
        }
    }
    //横向是否可移动
    for(let m=0;m<4;m++){
        for(let n=0;n<3;n++){
            if(newState['numbers'][m][n]===newState['numbers'][m][n+1]){
                newState['ifGameOver']=false
                return
            }
        }
    }
    //竖向是否可移动
    for(let x=0;x<3;x++){
        for(let y=0;y<4;y++){
            if(newState['numbers'][x][y]===newState['numbers'][x+1][y]){
                newState['ifGameOver']=false
                return
            }
        }
    }
    newState['ifGameOver']=true
}

//向上
function ToUp(state){
    // const tempNumbers = JSON.parse(JSON.stringify(numbers))
    //先填充0再合并
    //填充  0  的位置
    function fillZero(){
        for(let b=0;b<4;b++){
            for(let a=0; a<3; a++){
                let c = 1
                while(state['numbers'][a][b]===0){
                    state['numbers'][a][b]=state['numbers'][a+c][b]
                    state['numbers'][a+c][b]=0
                    c++
                    if((a+c)>3)break
                }
            }
        }
    }
    fillZero()

    // 合并相同项
    // 方向是上的话，从上往下循环查找相同项，遇到相同的，跳过下一次循环。
    for(let j=0;j<4;j++){ //外边的是列的循环，所以顺序都可以
        for(let i=0;i<3;i++){//内层的是相同行的查找，所以要从下往上，也就是从大到小
            if(state['numbers'][i][j]===state['numbers'][i+1][j]){
                state['score']+=state['numbers'][i][j]
                state['numbers'][i][j]*=2
                state['numbers'][i+1][j]  = 0
                i++ //如果有两个相等的，就跳过下次循环
            }
        }
    }
    fillZero()
}
//向下
function ToDown(state){
    //填充  0  的位置
    function fillZero(){
        for(let b=0;b<4;b++){
            for(let a=3;a>0;a--){
                let c=1
                while(state['numbers'][a][b]===0){
                    state['numbers'][a][b]=state['numbers'][a-c][b]
                    state['numbers'][a-c][b]=0
                    c++
                    if((a-c)<0)break
                }
            }
        }
    }
    fillZero()

    //合并相同项
    for(let n=0;n<4;n++){
        for(let m=3;m>0;m--){
            if(state['numbers'][m][n]===state['numbers'][m-1][n]){
                state['score']+=state['numbers'][m][n]
                state['numbers'][m][n]*=2
                state['numbers'][m-1][n]=0
                m--
            }
        }
    }
    fillZero()
}
//向左
function ToLeft(state){
    //去除 0
    function fillZero() {
        for(let a=0;a<4;a++){
            for(let b=0;b<3;b++){
                let c=1
                while(state['numbers'][a][b]===0){
                    state['numbers'][a][b]=state['numbers'][a][b+c]
                    state['numbers'][a][b+c]=0
                    c++
                    if((b+c)>3)break
                }
            }
        }
    }
    fillZero()
    //合并相同项
    for(let m=0;m<4;m++){
        for(let n=0;n<3;n++){
            if(state['numbers'][m][n]===state['numbers'][m][n+1]){
                state['score']+=state['numbers'][m][n]
                state['numbers'][m][n]*=2
                state['numbers'][m][n+1]=0
                n++
            }
        }
    }
    fillZero()
}
//向右
function ToRight(state){
    //填充 0
    function fillZero() {
        for(let a=0;a<4;a++){
            for(let b=3;b>0;b--){
                let c=1
                while(state['numbers'][a][b]===0){
                    state['numbers'][a][b]=state['numbers'][a][b-c]
                    state['numbers'][a][b-c]=0
                    c++
                    if((b-c)<0)break
                }
            }
        }
    }
    fillZero()
    //合并相同项
    for(let m=0;m<4;m++){
        for(let n=3;n>0;n--){
            if(state['numbers'][m][n]===state['numbers'][m][n-1]){
                state['score']+=state['numbers'][m][n]
                state['numbers'][m][n]*=2
                state['numbers'][m][n-1]=0
                n--
            }
        }
    }
    fillZero()
}