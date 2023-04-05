import React from 'react';
import styled from 'styled-components';
import OpenColor from 'open-color';

const Wrapper = styled.div`
  width : 800px;
  height : 800px;
  margin : 3% 3%;
  padding: 2% 2%;
  border-radius: 20px;
  background: white;
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
  date, setDate, itemsByDate, setItemsByDate,
}) {
  return (
    <Wrapper>
      <TitleWrapper>
        <Button>{'<'}</Button>
        <Title>
          {`To do - ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`}
        </Title>
        <Button>{'>'}</Button>
      </TitleWrapper>
    </Wrapper>
  );
}

export default TodaysTodoContainer;
