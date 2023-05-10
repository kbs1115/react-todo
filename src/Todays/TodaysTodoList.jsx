import React from 'react';
import styled from 'styled-components';
import TodaysTodoItem from './TodaysTodoItem'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodaysTodoList({ todos, onRemove ,setTodos }) {
  return (
    <TodoListBlock>
      {todos && todos.map(todo => (
        <TodaysTodoItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id} onRemove={onRemove}/>
      ))}
    </TodoListBlock>
  );
}

export default TodaysTodoList;