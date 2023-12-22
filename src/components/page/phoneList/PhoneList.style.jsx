import styled from "styled-components";

export const MobileListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MobileCard = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 16px;
  padding: 16px;
  width: 200px;
`;
export const Img = styled.img`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0;
  height: 200px;
  width: 90%;
  display: block;
  margin: 0 auto;
`;
export const H2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 5px;
`;
export const H4 = styled.h4`
  margin: 8px 0px;
`;
export const H5 = styled.h5`
  margin-top: 8px;
`;
export const Button = styled.button`
  background-color: #590b96;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #340756;
  }

  &:active {
    background-color: #c1179f;
  }
`;

export const ViewAllButton = styled.button`
  background-color: #590b96;
  color: white;
  padding: 10px 28px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  /* margin-top: 10px; */
  display: block;
  margin: 30px auto;

  &:hover {
    background-color: #340756;
  }
`;
