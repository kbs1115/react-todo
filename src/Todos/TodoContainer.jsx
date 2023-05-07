import React from 'react';
import styled from 'styled-components';
import CreateTodos from './CreateTodos';
import TodoList from './TodoList';

const Wrapper = styled.div`
  width : 800px;
  height : 800px;
  margin : 3% 3%;
  padding: 2% 2%;
  border-radius: 20px;
  background: white;
  position: relative;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

function TodoContainer({ children }) {
  return (
    <Wrapper>
      <Title>Todos</Title>
      <TodoList />
      <CreateTodos />
    </Wrapper>
  );
}

export default TodoContainer;
