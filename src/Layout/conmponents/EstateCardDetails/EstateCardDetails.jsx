import { useLoaderData, useParams } from "react-router-dom";
import "./EstateCardDetails.css";
import { FaChartArea } from "react-icons/fa";
import { FaLocationDot, FaRegCircleCheck } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import { IoCheckmarkCircle } from "react-icons/io5";

const EstateCardDetails = () => {
  const cardItems = useLoaderData();
  const {id} = useParams();
  const intId = parseInt(id);
  const cardItem = cardItems.find(item => item.id === intId);

  return (
    <>
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
              <p><span className="font-semibold text-lg text-[#151515]">Segmen: </span> {cardItem.segment_name}</p>
            </div>

            <div className="details_location_container">
              <div className="details_location_icon_container"><FaLocationDot /></div>
              <p>{cardItem.location}</p>
            </div>

            <div className="details_card_estate_info_row_one_container">

              <div className="flex items-center justify-center gap-1 text-xl text-[#8b5cf4]">
                <div><MdSell /></div>
                <p>Status: <span>{cardItem.status}</span></p>
              </div>

              <div className="flex items-center justify-center gap-1 text-xl text-[#8b5cf4]">
                <div><FaChartArea /></div>
                <p>Area: <span>{cardItem.area}</span></p>
              </div>

            </div>

            <div className="details_card_estate_info_row_tow_container">

              <div className="details_facilities_container">
                <div className="text-xl text-[#8b5cf4]"><FaRegCircleCheck /></div>
                <h2>Facilities</h2>
              </div>

              <div className="facilitise_info_contaienr">
                <div className="flex items-center justify-center gap-1 text-xl text-[#8b5cf4]">
                  <div><IoCheckmarkCircle /></div>
                  <p>{cardItem.facilities[0]}</p>
                </div>

                <div className="flex items-center justify-center gap-1 text-xl text-[#8b5cf4]">
                  <div><IoCheckmarkCircle /></div>
                  <p>{cardItem.facilities[1]}</p>
                </div>

                <div className="flex items-center justify-center gap-1 text-xl text-[#8b5cf4]">
                  <div><IoCheckmarkCircle /></div>
                  <p>{cardItem.facilities[2]}</p>
                </div>
              </div>

            </div>

            <div className="estate_card_price_container">
              <h2>Price: {cardItem.price}</h2>
            </div>

          </div>

          <div id="details_box_3" className="main_deatils_section_details_container">
            <article>
              <span>Details: </span>
              {cardItem.description}
            </article>
          </div>

        </div>

      </div>
    </div>
    </>
  );
};

export default EstateCardDetails;