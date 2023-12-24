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

  @media (max-width: 320px) {
    width: 90%;
  }

  @media (min-width: 321px) and (max-width: 576px) {
    width: 90%;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    width: 80%;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    width: 70%;
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 60%;
  }

  @media (min-width: 1201px) {
    width: 60%;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
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
  font-size: 0.9rem;
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
