import { useEffect, useState } from "react";
import PhoneList from "../phoneList/PhoneList";
import { ViewAllButton } from "../phoneList/PhoneList.style";

const Phone = () => {
    const [phones, setPhones] = useState([]);
    const [visiblePhones, setVisiblePhones] = useState([]);
    const [showAll, setShowAll] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:500/phones");
          const data = await response.json();
          setPhones(data);
          // Initially display only 8 items
          setVisiblePhones(data.slice(0, 8));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleViewAll = () => {
      // Show all phones when "View All" button is clicked
      setVisiblePhones(phones);
      setShowAll(true);
    };
  return (
    <>
      <PhoneList phones={visiblePhones} />
      {!showAll && <ViewAllButton onClick={handleViewAll}>View All</ViewAllButton>}
    </>
  );
};

export default Phone;
