import PrivetRoutes from "../../conmponents/PrivetRoutes/PrivetRoutes";
import Estates from "./Estates/Estates";
import HeadingSlider from "./HeadingSlider/HeadingSlider";
import HomeBaner from "./HomeBaner/HomeBaner";
import MainFocus from "./MainFocus/MainFocus";

const HomePageLayout = () => {
  return (
    <div>
      <HomeBaner></HomeBaner>
      <MainFocus></MainFocus>
      <PrivetRoutes><Estates></Estates></PrivetRoutes>
      <HeadingSlider></HeadingSlider>
    </div>
  );
};

export default HomePageLayout;