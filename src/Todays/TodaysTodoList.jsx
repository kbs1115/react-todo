import React from 'react';
import styled from 'styled-components';
import TodaysTodoItem from './TodaysTodoItem'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodaysTodoList({ todos, onRemove ,setTodos, itemsByDate, setItemsByDate, dateString }) {
  if(todos === undefined)
    todos =[];
  todos = todos.filter(todo => todo !== undefined);
  return (
    <TodoListBlock>
      {todos && todos.map(todo => (
        <TodaysTodoItem todo={todo} todos={todos} setTodos={setTodos} key={todo.id} onRemove={onRemove}
                        itemsByDate={itemsByDate} setItemsByDate={setItemsByDate} dateString={dateString}/>
      ))}
    </TodoListBlock>
  );
}

export default TodaysTodoList;