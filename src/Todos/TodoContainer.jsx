import React, { useRef, useState } from 'react';
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

function TodoContainer({ todos, setTodos }) {
  const nextId = useRef(1);
  const [inputs, setInputs] = useState({
    text: '',
    date: ''
  });
  const { text, date } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onCreate = () => {
    const newTodo = {
      id: nextId.current,
      text,
      date,
      star: false,
      done: false
    };
    
    let newTodos = [...todos, newTodo];
    newTodos = newTodos.sort((a, b) => {
      let arr = [0, 0];
      if(a.star === true){
        arr[0] -= 10;
      }
      if(b.star === true){
        arr[1] -= 10;
      }
      if(a.done === true){
        arr[0] += 30;
      }
      if(b.done === true){
        arr[1] += 30;
      }

      if(arr[0] === arr[1]){
        return new Date(a.date) - new Date(b.date);
      }
      else{
        return arr[0] - arr[1];
      }
    });
    setTodos(newTodos);

    setInputs({
      text: '',
      date: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Wrapper>
      <Title>Todos</Title>
      <TodoList todos={todos} setTodos={setTodos} onRemove={onRemove}/>
      <CreateTodos onChange={onChange} onCreate={onCreate} text={text} date={date}/>
    </Wrapper>
  );
}

export default TodoContainer;
