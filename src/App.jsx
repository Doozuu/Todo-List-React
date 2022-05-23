import React, { useState } from 'react'
import './AppS.css'
import TodoBoard from './component/todoBoard'
import TodoItem from './component/TodoItem'

// 인풋창이 있고 버튼이 있다.
// 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다.
// 아이템 삭제 버튼을 누르면 삭제가 가능하다.

function App() {
  const [inputValue, setInputValue] = useState('') // 인풋 받기
  const [todoList, setTodoList] = useState([]) // 배열에다 인풋 받은 값 저장
  const addItem = () => {
    setTodoList([...todoList, inputValue]) // 기존 아이템 유지하고 새로 더함.
  }

  return (
    <div className="every">
      <main>
        <input
          className="box"
          value={inputValue}
          type="text"
          placeholder="할 일을 입력하세요." // 입력 힌트
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="addButton" onClick={addItem}>
          추가
        </button>

        <TodoBoard todoList={todoList} />
      </main>
    </div>
  )
}

export default App
