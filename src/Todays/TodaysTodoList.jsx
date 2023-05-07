import React from 'react';
import styled from 'styled-components';
import TodaysTodoItem from './TodaysTodoItem'

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodaysTodoList() {
  return (
    <TodoListBlock>
      <TodaysTodoItem text="프로젝트 생성하기" done={true} />
      <TodaysTodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodaysTodoItem text="Context 만들기" done={false} />
      <TodaysTodoItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
}

export default TodaysTodoList;