import { FaChartArea, FaUser } from "react-icons/fa";
import "../EstateCard/EstateCard.css";
import PropTypes from 'prop-types';
import { FaCheckToSlot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const {
    id,
    image,
    estate_title,
    segment_name,
    price,
    status,
    area,
  } = estate;

  return (
    <div>

      <div className="main_card_container">
        <div className="main_image_container">
          <img src={image} alt="Estate img" />
        </div>
        <div className="main_card_title_container">

          <div className="card_title_row_one">
            <div className="card_title_row_one_outer_container">
              <div className="title_icon_container"><FaUser /></div>
              <p>{segment_name}</p>
            </div>
            <div className="card_title_row_one_outer_container">
              <div className="title_icon_container"><FaCheckToSlot /></div>
              <p>{status}</p>
            </div>
          </div>

          <div className="card_title_row_two">
            <h2>{estate_title}</h2>
          </div>

          <div className="card_title_row_three">
            <div className="card_row_three_outer_container">
              <div className="title_icon_container"><FaChartArea /></div>
              <p>{area}</p>
            </div>
            <Link to={`/estate/details/${id}`}> 
              <button>READ MORE</button>
            </Link>
          </div>

          <div className="card_price_container"> 
            <h2>{price}</h2>
          </div>

        </div>
      </div>

    </div>
  );
};

EstateCard.propTypes = {
  estate: PropTypes.object
}

export default EstateCard;
