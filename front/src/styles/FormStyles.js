import styled from "styled-components";

// Contenedor principal del formulario
export const FormContainer = styled.div`
  max-width: 600px;
  margin: 100px auto;  
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h1`
  text-align: center;
  color: #52b788;
  margin-bottom: 20px;
`;


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  color: #333;
  margin-bottom: 7px;
`;


export const StyledField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    border-color: #52b788;
    outline: none;
    box-shadow: 0 0 5px rgba(82, 183, 136, 0.5);
  }
`;


export const ErrorText = styled.div`
  color: #ff6b6b;
  font-size: 14px;
  margin-top: -10px;
`;


export const SubmitButton = styled.button`
  background-color: #52b788;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #40916c;
  }

  &:disabled {
    background-color: #a8dadc;
    cursor: not-allowed;
  }
`;