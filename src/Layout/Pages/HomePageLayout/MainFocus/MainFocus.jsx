import { Link } from "react-router-dom";
import BuyHomeSvg from "../../../conmponents/AllSvgImages/BuyHomeSvg/BuyHomeSvg";
import "../MainFocus/MainFocus.css";

const MainFocus = () => {
  return (
    <>
      <section className="main_focus_section_outer_container">
        <div className="focus_section_title_container">
          <h2>Our Main Focus</h2>
        </div>

        <div></div>

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

        </div>
      </section>
    </>
  );
};

export default MainFocus;
