import React, { useEffect, useState } from "react";
import { ViewAllButton } from "../phoneList/PhoneList.style";
import SearchBar from "../searchPhone/SearchBar";
import PhoneDetails from "./phoneDetails/PhoneDetails";
import PhoneList from "../phoneList/PhoneList";

const Phone = () => {
  const [phones, setPhones] = useState([]);
  const [visiblePhones, setVisiblePhones] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    name: "",
    price: "",
    type: "",
    processor: "",
    memory: "",
    os: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mobile-ordering-app-backend-pu2yj6ph1-alif819015.vercel.app/phones"
        );
        const data = await response.json();
        setPhones(data);
        setVisiblePhones(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm, filterCategory) => {
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [filterCategory]: searchTerm,
    }));
  };

  const applyFilters = () => {
    const filtered = phones.filter((phone) => {
      const matchesFilters =
        (searchFilters.name &&
          phone.name
            ?.toLowerCase()
            .includes(searchFilters.name.toLowerCase())) ||
        (searchFilters.price &&
          phone.price &&
          phone.price?.toString().includes(searchFilters.price.toString())) ||
        (searchFilters.type &&
          phone.type
            ?.toLowerCase()
            .includes(searchFilters.type.toLowerCase())) ||
        (searchFilters.processor &&
          phone.processor
            ?.toLowerCase()
            .includes(searchFilters.processor.toLowerCase())) ||
        (searchFilters.memory &&
          phone.memory
            ?.toLowerCase()
            .includes(searchFilters.memory.toLowerCase())) ||
        (searchFilters.os &&
          phone.os?.toLowerCase().includes(searchFilters.os.toLowerCase()));

      return matchesFilters;
    });

    setFilteredPhones(filtered);
    setVisiblePhones(filtered.slice(0, 8));
  };

  const handleViewAll = () => {
    setVisiblePhones(phones);
    setShowAll(true);
  };

  const handlePhoneClick = (phone) => {
    setSelectedPhone(phone);
    history.push(`/details/${phone.id}`);
  };

  useEffect(() => {
    applyFilters();
  }, [searchFilters]);

  return (
    <>
      <SearchBar onSearch={(term) => handleSearch(term, "name")} />
      {selectedPhone ? (
        <PhoneDetails phone={selectedPhone} />
      ) : (
        <PhoneList
          phones={showAll ? phones : visiblePhones}
          onViewDetails={handlePhoneClick}
        />
      )}
      {!showAll && (
        <ViewAllButton onClick={handleViewAll}>View All</ViewAllButton>
      )}
    </>
  );
};

export default Phone;
