import React, {useState} from 'react';


function Hello(){
    const [number, setNumber] = useState(0);//0: 상태 초기 값
    //1. 상태 값 변수 2. 상태 값 갱신 함수
    const onIncrease = () => {
        setNumber(preNum => preNum + 1);
    }

    const onDecrease = () => {
        setNumber(preNum => preNum - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}


export default Hello;