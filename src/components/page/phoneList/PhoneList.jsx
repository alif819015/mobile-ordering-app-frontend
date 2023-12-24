import {
  Button,
  DetailsLink,
  H3,
  H4,
  H5,
  Img,
  MobileCard,
  MobileListContainer,
} from "./PhoneList.style";

const PhoneList = ({ phones }) => {
  return (
    <MobileListContainer>
      {phones.map((phone) => {
        const { id, brand, image, name, price } = phone;

        return (
          <MobileCard key={id}>
            <Img src={image} alt="Alt Text" />
            <H3>{name}</H3>
            <H4>Brand: {brand}</H4>
            <H5>Price: {price}</H5>
            <Button>
              <DetailsLink to={`/details/${phone.id}`}>
                View Details
              </DetailsLink>
            </Button>
          </MobileCard>
        );
      })}
    </MobileListContainer>
  );
};

export default PhoneList;
