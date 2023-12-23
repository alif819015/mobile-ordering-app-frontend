import React from "react";
import { MobileDetailsContainer } from "./PhoneDetails.style";
import { H3, H5, Img } from "../../phoneList/PhoneList.style";

const PhoneDetails = ({ phone }) => {
  const { image, name, price, processor } = phone;
  return (
    <MobileDetailsContainer>
      <Img src={image} alt="Alt Text" />
      <H3>{name}</H3>
      <H5>Processor: {processor}</H5>
      <H5>Price: ${price}</H5>
    </MobileDetailsContainer>
  );
};

export default PhoneDetails;
