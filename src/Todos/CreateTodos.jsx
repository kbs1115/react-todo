import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
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
  padding-right: 16px;
  padding-bottom: 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 70%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const DateInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 25%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-left: 10px;
`;

function CreateTodos() {
    return (
        <>
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder='Todo를 입력하세요.'/>
            <DateInput placeholder='날짜' />
          </InsertForm>
        </InsertFormPositioner>
        <CreateButton>
          <MdAdd />
        </CreateButton>
        </> 
    );
}

export default CreateTodos;