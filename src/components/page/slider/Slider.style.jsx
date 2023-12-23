import styled from "styled-components";

export const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  border: 1px solid #360ad7;
  border-radius: 8px;
  width: 100%;
  max-width: 900px;
  margin: 30px auto;
`;

export const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  box-sizing: border-box;
`;

export const SliderButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  font-size: 40px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "next" ? "right: 10px;" : "left: 10px;")};
  z-index: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 400px;
`;
