import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: #deff4e;
`;

export const StyledTitle = styled.h2`
  color: #0f93fe;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
  margin: 0px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #efffa8;
  color: #757575;
  border: none;
  outline: none;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #efffa8;
  color: #757575;
  border: none;
  outline: none;
`;

export const StyledButton = styled.button`
  background-color: #0f93fe;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0c7dc8;
  }
`;

export const StyledNewMessageButton = styled.button`
  background-color: #0f93fe;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0c7dc8;
  }
`;
