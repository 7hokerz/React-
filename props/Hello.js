import React, { useState } from 'react';

//함수형 컴포넌트(항상 대문자로 시작)
/*
1. props 파라미터 이용
function Hello(props){//props는 객체 형태로 전달된다.
    console.log(props);
    return (
        <div style={{color: props.color}}>
            안녕하세요 {props.name}
        </div>
    )//항상 하나의 태그로 묶여있어야 한다.
}

//2. es6 비구조화 할당 이용 destructing.
function Hello({name, color}){
    return (
        <div style={{color: color}}>
            안녕하세요 {name}
        </div>
    )
}
*/

//전달받은 props를 바꾸고 싶을 때

function Hello({name, color}){
    const [result, setResult] = useState(name);//name은 초기값
    //상태 변수, 상태를 변경할 수 있는 함수
    const onClick = () =>{
        setResult('jenny');//바꾸고자 하는 값을 setResult의 인자로 설정
    }

    return (
        <div style={{color: color}}>
            <div onClick={onClick}> 안녕 {result} </div>
        </div>
    )
}

Hello.defaultProps = {//기본 props 값 지정
    color: 'black'
}

export default Hello;//Hello라는 컴포넌트를 내보낸다는 의미.