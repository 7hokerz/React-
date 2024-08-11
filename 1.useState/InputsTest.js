import React, {useState} from 'react';


function InputTest(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })//객체 형태로 두 input 태그의 초기값 설정(즉, inputs는 객체)
    
    const {name, nickname} = inputs;
    //객체에서 속성값 추출

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({//아래와 같은 과정을 거치고 그 값으로 상태를 업데이트하는 함수
            ...inputs,//객체 복사
            [name]: value//[name]은 변수로서 name 또는 nickname이 들어올 수 있음.
        });
        //리액트에서 객체 수정 시 inputs[name] = value와 같이 직접 수정은 금물.
        //전개 연산자로 객체를 복사하고 이 새로운 객체에서 업데이트를 해줘야 함.
    };//위와 같은 것을 불변성을 지킨다고 함.

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    }

    return(
        <div>
            <input
            name="name"
            placeholder='이름'
            onChange={onChange}
            value={name}/>

            <input
            name="nickname"
            placeholder='이름'
            onChange={onChange}
            value={nickname}/>

            <button onClick={onReset}>초기화</button>
            
            <div>
                {name} ({nickname})
            </div>
        </div>
    )

}

export default InputTest;