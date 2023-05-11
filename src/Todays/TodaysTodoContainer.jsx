import React, { useState, useEffect, useCallback, useRef } from 'react';
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
    const set = new Set(itemsByDate[dateString].concat(todos));
    newObj[dateString] = [...set];
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

  const onCreate = (t) => {
    const newTodo = {
      id: nextId.current,
      text: t,
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
      return arr[0] - arr[1];
    });
    setTodos(newTodos);
    nextId.current += 1;
    setInput('');
  }

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));

    const newObj = {};
    newObj[dateString] = itemsByDate[dateString].filter(item => item.id !== id);
    setItemsByDate(Object.assign(itemsByDate, newObj));
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
    <TodaysTodoList onRemove={onRemove} todos={todos} setTodos={setTodos} 
                    dateString={dateString} itemsByDate={itemsByDate} setItemsByDate={setItemsByDate}/>
    <CreateTodaysTodo onChange={onChange} onCreate={onCreate} text={input}/>
    </Wrapper>
  );
}

export default TodaysTodoContainer;
