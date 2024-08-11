import React from 'react';


function Hello({name, color, boolean}){
    //삼항 연산자로 조건에 따라 다른 렌더링을 할 수 있다.
    return (
        <>
            <div style={{color: color}}>
                안녕 {name}
            </div>
            {boolean ? <p>Hello</p> : <p>Bye</p>}
            
        </>
    )
}


export default Hello;