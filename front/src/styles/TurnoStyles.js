
import styled from 'styled-components';

export const TurnoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-collapse: collapse; 
  background: #f8f9fa; 
  overflow: hidden;
 
`;

export const TurnoHeader = styled.div`
   display: grid;
  grid-template-columns: repeat(5, 1fr); 
  gap: 10px;
  padding: 10px;
  font-weight: bold;
  background-color: #52b788;
  color: white;
  text-align: center;
   height: 50px;
  gap: 20px;
  font-size: 18px;
  border-bottom: 2px solid #40916c;
`;

export const TurnoColumn = styled.div`
  padding: 10px;
  text-align: center;
  word-wrap: break-word; /* Para que el texto largo no desborde */
  font-size: 16px;
`;


export const CardContainer = styled.div`
 display: grid;
  grid-template-columns: repeat(5, 1fr); /* Ahora 5 columnas */
  gap: 10px;
  padding: 10px;
  text-align: center;
  background-color: #f1f1f1;
  border-bottom: 1px solid #ccc;
`;

export const CancelButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 3px 7px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #e63946;
  }`

  export const PageContainerTurnos = styled.div`
  padding-top: 100px;  
  padding-left: 20px; 
  padding-right: 20px;
`;