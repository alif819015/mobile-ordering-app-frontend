import styled from "styled-components";

export const StyledCard = styled.div`
  width: 70%;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: block;
  margin: 40px auto;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 200px;
  height: 250px;
  display: block;
  margin: 10px auto;
`;

export const CardBody = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333333;
`;

export const CardText = styled.p`
  font-size: .90rem;
  color: #555555;
  margin-bottom: 1rem;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BuyNowButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #297fb8;
  }
`;
