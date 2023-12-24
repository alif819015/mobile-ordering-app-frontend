import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 2/3;
  margin: auto;

  @media (min-width: 768px) {
    max-width: 3/5;
  }
`;

export const Image = styled.img`
  width: 80%;
  max-width: 3/5;
  margin: auto;
  margin-bottom: 1.25rem; /* 5 units */
`;

export const Text = styled.p`
  color: #ff007f; /* Pink color */
  font-weight: bold;
`;

export const IconText = styled.i`
  color: #00cc00; /* Green color */
`;

export const Button = styled.button`
  background-color: #ff9900; /* Orange color */
  padding: 0.5rem 1rem;
  border-radius: 0.25rem; /* 1 unit */
  color: #ffffff; /* White color */
  font-weight: bold;
  display: flex;
  align-items: center;
`;
