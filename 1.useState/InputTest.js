import React, {useState} from 'react';


function InputTest(){
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }//text 값을 입력된 값으로 업데이트

    const onReset = () =>{
        setText('');
    }//text를 공백으로 업데이트

    return(
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>{text}</b>
            </div>
        </div>
    )
    /*
    input에 onchange 이벤트를 등록 후 value 값으로 text 상태 값을 준다.
    만약 value값을 부여하지 않으면 reset 시 input 상자 안의 값이 리셋되지 않는다.
    */
}


export default InputTest;