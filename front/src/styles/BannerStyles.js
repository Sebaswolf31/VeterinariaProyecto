import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 300px; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
  position: relative;
  margin-top: 1px; 
`;

export const BannerTitle = styled.h1`
  font-size: 2.9rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

export const BannerTitleH2= styled.h2`
  
  margin-bottom: 100px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  color: black;

  font-size: 28px;
  font-weight: bold;
  margin: 0;
  color: #ffffff; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
   margin-top: 10px; 
`;

export const BannerImage = styled.img`
  width: 100%; 
  height: 300px;
  position: relative;
  left: 0;
  right: 0;
  margin-top: 80px; 
`;

export const BannerButton = styled.button`
  background: ${(props) => (props.cancel ? "#ff6b6b" : "#52b788")};
  color: white;
  font-weight: bold;
  padding: 10px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: 0.3s;
  margin-top: 10px; 
  margin-block-end: 10px;
  
  &:hover {
    background: ${(props) => (props.cancel ? "#e63946" : "#40916c")};

    
  }
`; 
