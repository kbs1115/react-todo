import React from 'react';
import styled from 'styled-components';
import TodaysTodoItem from './TodaysTodoItem'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodaysTodoList({ todos, onRemove }) {
  return (
    <TodoListBlock>
      {todos && todos.map(todo => (
        <TodaysTodoItem todo={todo} key={todo.id} onRemove={onRemove}/>
      ))}
    </TodoListBlock>
  );
}

export default TodaysTodoList;