import { useLoaderData, useParams } from "react-router-dom";
import "./EstateCardDetails.css";
import { FaChartArea } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const EstateCardDetails = () => {
  const cardItems = useLoaderData();
  const {id} = useParams();
  const intId = parseInt(id);
  const cardItem = cardItems.find(item => item.id === intId);

  return (
    <div className="main_card_details_outer_container">
      <div className="main_card_details_inner_container">

        <div className="main_details_section_outer_container">

          <div id="details_box_1" className="main_details_image_outer_container">
            <div className="main_details_image_container">
              <img src={cardItem.image} />
            </div>
          </div>

          <div id="details_box_2" className="main_details_info_container">
            <div className="card_details_title_container">
              <h2>{cardItem.estate_title}</h2>
              <p><span className="font-bold text-xl text-[#151515]">Segmen: </span> {cardItem.segment_name}</p>
            </div>
            <div className="details_location_container">
              <div className="details_location_icon_container"><FaLocationDot /></div>
              <p>{cardItem.location}</p>
            </div>
            <div className="details_card_estate_info_container">
              <div>
                <p>Status: <span>{cardItem.status}</span></p>
              </div>
              <div></div>
            </div>
          </div>

          <div id="details_box_3" className="main_deatils_section_details_container"><p>is not</p></div>

        </div>

      </div>
    </div>
  );
};

export default EstateCardDetails;