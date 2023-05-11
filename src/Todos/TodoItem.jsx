import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdStar } from 'react-icons/md';
import { MdArrowCircleLeft } from 'react-icons/md';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Star = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  
  ${props =>
    props.star &&
    css`
      color: yellow;
    `}
`;

const Send = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: green;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const DateComponent = styled.div`
  flex: 1;
  font-size: 16px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ todo, todos, onRemove, setTodos, sendItem }) {
  const changeStar = (id) => {
    let newTodos = todos.map(todo =>
      todo.id === id ? {...todo, star: !todo.star} : todo)
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
  };

  const changeDone = (id) => {
    let newTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo)
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
  };

  return (
    <TodoItemBlock>
      <Send onClick={() => {sendItem(todo.text, todo.star, todo.done); onRemove(todo.id);}}><MdArrowCircleLeft /></Send>
      <CheckCircle done={todo.done} onClick={() => changeDone(todo.id)}>{todo.done && <MdDone />}</CheckCircle>
      <Text done={todo.done}>{todo.text}</Text>
      <DateComponent done={todo.done}>~{todo.date}</DateComponent>
      <Star star={todo.star} onClick={() => changeStar(todo.id)}>
        <MdStar />
      </Star>
      <Remove onClick={() => onRemove(todo.id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;