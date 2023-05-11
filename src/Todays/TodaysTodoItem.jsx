import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdStar } from 'react-icons/md';

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

function TodaysTodoItem({ todo, todos, onRemove, setTodos, itemsByDate, setItemsByDate, dateString }) {
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
  
        return arr[0] - arr[1];
      });
      setTodos(newTodos);

      const newObj ={};
      newObj[dateString] = newTodos;
      setItemsByDate(Object.assign(itemsByDate, newObj));    
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
  
        return arr[0] - arr[1];
      });
      setTodos(newTodos);

      const newObj ={};
      newObj[dateString] = newTodos;
      setItemsByDate(Object.assign(itemsByDate, newObj)); 
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={todo.done} onClick={() => {changeDone(todo.id)}}>{todo.done && <MdDone />}</CheckCircle>
      <Text done={todo.done}>{todo.text}</Text>
      <Star onClick={() => {changeStar(todo.id)}} star={todo.star}>
        <MdStar />
      </Star>
      <Remove onClick={() => onRemove(todo.id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodaysTodoItem;