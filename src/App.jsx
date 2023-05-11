import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TodoContainer from './Todos/TodoContainer';
import TodaysTodoContainer from './Todays/TodaysTodoContainer';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
  color: black;
  flex-direction: row;
`;

function App() {
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [itemsByDate, setItemsByDate] = useState({});
  const dateString = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
  const nextId = useRef(99999);
  useEffect(() => {
    const newDate = new Date();
    const today = `${newDate.getFullYear}.${newDate.getMonth + 1}.${newDate.getDate}`;
    const initialItems = {};
    initialItems[today] = [];
    setItemsByDate(Object.assign(itemsByDate, initialItems));
  }, []);

  const sendItem = (text, star, done) => {
    let newTodayTodos = itemsByDate[dateString];
    
    const newTodo = {
      id: nextId.current,
      text: text,
      star: star,
      done: done
    };
    let newTodos = [...newTodayTodos, newTodo].filter(todo => todo !== undefined);
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

    const newObj = {};
    newObj[dateString] = newTodos;
    console.log(newTodos);
    setItemsByDate(Object.assign(itemsByDate, newObj));

    setDate(new Date(date.setDate(date.getDate())));
    
    console.log(itemsByDate);
    nextId.current += 1;
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TodaysTodoContainer
          date={date}
          setDate={setDate}
          itemsByDate={itemsByDate}
          setItemsByDate={setItemsByDate}
        />
        <TodoContainer todos={todos} setTodos={setTodos} sendItem={sendItem}/>
      </Wrapper>
    </>
  );
}

export default App;
