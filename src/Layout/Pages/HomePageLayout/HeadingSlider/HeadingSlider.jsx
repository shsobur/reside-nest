import "../HeadingSlider/HeadingSlider.css";
import Marquee from "react-fast-marquee";

// Image__
import img1 from "../../../../assets/heading-img/slider (1).png"
import img2 from "../../../../assets/heading-img/slider (2).png"
import img3 from "../../../../assets/heading-img/slider (3).png"
import img4 from "../../../../assets/heading-img/slider (4).png"
import img5 from "../../../../assets/heading-img/slider (5).png"
import img6 from "../../../../assets/heading-img/slider (6).png"
import img7 from "../../../../assets/heading-img/slider (7).png"

const HeadingSlider = () => {
  return (
    <div className="main_slider_outer_section_container">
      <div className="main_slider_inner_section_container">
        <Marquee>
          <div className="marquee_img_container"><img src={img1} alt="image" /></div>
          <div className="marquee_img_container"><img src={img2} alt="image" /></div>
          <div className="marquee_img_container"><img src={img3} alt="image" /></div>
          <div className="marquee_img_container"><img src={img4} alt="image" /></div>
          <div className="marquee_img_container"><img src={img5} alt="image" /></div>
          <div className="marquee_img_container"><img src={img6} alt="image" /></div>
          <div className="marquee_img_container"><img src={img7} alt="image" /></div>
        </Marquee>
      </div>
    </div>
  );
};

export default HeadingSlider;