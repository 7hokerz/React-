import React from 'react';
import Hello from './Hello';//Hello라는 컴포넌트를 가져옴

function App() {
  return (
    <div>
      <Hello name='hi' color='blue'/>
      <Hello name='hi' />
    </div>
  );//App 컴포넌트에서 Hello 컴포넌트를 불러와서 사용할 때, name과 color 값을 전달
}

export default App;
