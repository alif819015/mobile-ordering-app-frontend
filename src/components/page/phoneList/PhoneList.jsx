import { Link } from "react-router-dom";
import {
  Button,
  H3,
  H4,
  H5,
  Img,
  MobileCard,
  MobileListContainer,
} from "./PhoneList.style";
// import { useState } from "react";

const PhoneList = ({ phones }) => {
  // const [phones, setPhones] = useState([]);
  // useEffect(() => {
  //   fetch("https://mobile-ordering-app-backend-pu2yj6ph1-alif819015.vercel.app/phones")
  //     .then((res) => res.json())
  //     .then((data) => setPhones(data));
  // }, []);

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
              <Link to={`/details/${phone.id}`}>View Details</Link>
            </Button>
          </MobileCard>
        );
      })}
    </MobileListContainer>
  );
};

export default PhoneList;
