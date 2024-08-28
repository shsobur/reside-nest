import { Link } from "react-router-dom";
import BuyHomeSvg from "../../../conmponents/AllSvgImages/BuyHomeSvg/BuyHomeSvg";
import "../MainFocus/MainFocus.css";
import RentHomeSvg from "../../../conmponents/AllSvgImages/RentHomeSvg/RentHomeSvg";
import SellHomeSvg from "../../../conmponents/AllSvgImages/SellHomeSvg/SellHomeSvg";
import ConstructionSvg from "../../../conmponents/AllSvgImages/ConstructionSvg/ConstructionSvg";
import ApartioSvg from "../../../conmponents/AllSvgImages/ApartioSvg/ApartioSvg";
import ApartmentsSvg from "../../../conmponents/AllSvgImages/ApartmentsSvg/ApartmentsSvg";
import AreaSvg from "../../../conmponents/AllSvgImages/AreaSvg/AreaSvg";

const MainFocus = () => {
  return (
    <>
      <section className="main_focus_section_outer_container">
        <div className="focus_section_title_container">
          <h2>Our Main Focus</h2>
        </div>

        <div className="main_focus_card_outer_container">
          <div className="focus_parcard_container">
            <div className="svg_image_outer_container">
              <div className="svg_image_inner_container">
                <BuyHomeSvg></BuyHomeSvg>
              </div>
            </div>

            <div className="focus_section_detais_container">
              <h3>Buy a Home</h3>
              <p>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>
              <Link>
                <span>Find Home -&gt; </span>
              </Link>
            </div>
          </div>

          <div className="focus_parcard_container">
            <div className="svg_image_outer_container">
              <div className="svg_image_inner_container">
                <RentHomeSvg></RentHomeSvg>
              </div>
            </div>

            <div className="focus_section_detais_container">
              <h3>Rent a Home</h3>
              <p>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>
              <Link>
                <span>Find Home -&gt; </span>
              </Link>
            </div>
          </div>

          <div className="focus_parcard_container">
            <div className="svg_image_outer_container">
              <div className="svg_image_inner_container">
                <SellHomeSvg></SellHomeSvg>
              </div>
            </div>

            <div className="focus_section_detais_container">
              <h3>Sell a Home</h3>
              <p>
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>
              <Link>
                <span>Find Home -&gt; </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="main_focus_builder_info_outer_container">
          <div className="main_focus_builder_info_inner_container">

            <div className="builder_par_section_container">
              <div className="builder_Info_icon_cntainer">
                <ConstructionSvg></ConstructionSvg>
              </div>
              <h3>300+</h3>
              <p>Total Construction</p>
            </div>

            <div className="builder_par_section_container">
              <div className="builder_Info_icon_cntainer">
                <ApartioSvg></ApartioSvg>
              </div>
              <h3>140+</h3>
              <p>Apartio Rooms</p>
            </div>

            <div className="builder_par_section_container">
              <div className="builder_Info_icon_cntainer">
                <ApartmentsSvg></ApartmentsSvg>
              </div>
              <h3>250+</h3>
              <p>Apartments Sold</p>
            </div>

            <div className="builder_par_section_container">
              <div className="builder_Info_icon_cntainer">
                <AreaSvg></AreaSvg>
              </div>
              <h3>710+</h3>
              <p>Total Area Sq</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default MainFocus;
