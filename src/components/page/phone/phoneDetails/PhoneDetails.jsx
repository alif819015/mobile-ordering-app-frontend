import React from "react";
import {
  BuyNowButton,
  CardActions,
  CardBody,
  CardImage,
  CardText,
  CardTitle,
  StyledCard,
} from "./PhoneDetails.style";
import { useLoaderData } from "react-router-dom";

const PhoneDetails = () => {
  // const { image, name, price, processor } = phone;
  const phone = useLoaderData();
  const { brand, image, name, price, processor } = phone;
  return (
    <StyledCard>
      <CardImage
        src={image}
        alt="Shoes"
      />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>Brand: {brand}</CardText>
        <CardText>Processor: {processor}</CardText>
        <CardText>Brand: {brand}</CardText>
        <CardText>Price: {price}</CardText>
        <CardActions>
          <BuyNowButton>Buy Now</BuyNowButton>
        </CardActions>
      </CardBody>
    </StyledCard>
  );
};

export default PhoneDetails;
