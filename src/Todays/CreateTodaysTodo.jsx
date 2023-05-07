
import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md'

const CreateButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function CreateTodaysTodo({ onChange, onCreate, text }) {
    return (
        <>
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder='해당 날짜의 Todo를 입력하세요.' onChange={onChange} value={text}/>
          </InsertForm>
        </InsertFormPositioner>
        <CreateButton onClick={onCreate}>
          <MdAdd />
        </CreateButton>
        </> 
    );
}

export default CreateTodaysTodo;