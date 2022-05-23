import React from 'react'

function TodoItem(props) {
  const deleteItem = () => {}
  return (
    <div className="todo-item">
      {props.item} <br />
      <button className="deleteButton" onClick={deleteItem}>
        삭제
      </button>
    </div>
  )
}

export default TodoItem
