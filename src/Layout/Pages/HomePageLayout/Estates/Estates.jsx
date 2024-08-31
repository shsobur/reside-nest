import { useEffect, useState } from "react";
import "../Estates/Estates.css";
import EstateCard from "../../../conmponents/EstateCard/EstateCard";

const Estates = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("estate.json")
    .then(res => res.json())
    .then(data => {
      setEstates(data);
    })
  }, [])

  console.log(estates);

  return (
    <div className="main_estate_outer_container">
      <div className="main_estate_inner_container">

        <div className="main_estste_title_container">
          <h2>Estats</h2>
          <p>Fing your dream house</p>
        </div>

        <div className="main_card_section_container">
          {
            estates.map(estate => <EstateCard key={estate.id} estate={estate} ></EstateCard>)
          }
        </div>

      </div>
    </div>
  );
};

export default Estates;