import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import OpenColor from 'open-color';
import TodaysTodoList from './TodaysTodoList';
import CreateTodaysTodo from './CreateTodaysTodo';

const Wrapper = styled.div`
  width : 800px;
  height : 800px;
  margin : 3% 3%;
  padding: 2% 2%;
  border-radius: 20px;
  background: white;
  position: relative;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${OpenColor.green[1]};
  &:hover {
    background: ${OpenColor.green[2]};
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content:space-between;
`;

const Title = styled.div`
  align-content: center;
  font-size: 40px;
  font-weight: bold;
`;

function TodaysTodoContainer({
  date, setDate, itemsByDate, setItemsByDate
}) {
  const dateString = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  const [todos, setTodos] = useState(itemsByDate[dateString]);
  const [input, setInput] = useState('');
  const nextId = useRef(1);
  

  useEffect(() => {
    if (itemsByDate[dateString] === undefined) {
      const newObj = {};
      newObj[dateString] = [];
      setItemsByDate(Object.assign(itemsByDate, newObj));
    }
    setTodos(itemsByDate[dateString]);
  }, [date]);

  useEffect(() => {
    const newObj = {};
    newObj[dateString] = todos;
    setItemsByDate(Object.assign(itemsByDate, newObj));
  }, [todos]);

  const handleLeftButtonClick = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  const handleRightButtonClick = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };

  const onChange = e => {
    const value = e.target.value;
    setInput(value);
  };

  const onCreate = () => {
    const newTodo = {
      id: nextId.current,
      text: input
    };
    setTodos([...todos, newTodo]);
    nextId.current += 1;
    setInput('');
  }

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Button onClick={handleLeftButtonClick}>{'<'}</Button>
        <Title>
          {`To do - ${dateString}`}
        </Title>
        <Button onClick={handleRightButtonClick}>{'>'}</Button>
      </TitleWrapper>
    <TodaysTodoList onRemove={onRemove} todos={todos}/>
    <CreateTodaysTodo onChange={onChange} onCreate={onCreate} text={input}/>
    </Wrapper>
  );
}

export default TodaysTodoContainer;
