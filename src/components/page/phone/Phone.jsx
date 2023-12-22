import { useEffect, useState } from "react";
import PhoneList from "../phoneList/PhoneList";

const Phone = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:500/phones");
        const data = await response.json();
        setPhones(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(phones);
  return (
    <div>
      <PhoneList phones={phones} />
    </div>
  );
};

export default Phone;
