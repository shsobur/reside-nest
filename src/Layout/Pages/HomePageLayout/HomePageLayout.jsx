import HeadingSlider from "./HeadingSlider/HeadingSlider";
import HomeBaner from "./HomeBaner/HomeBaner";
import MainFocus from "./MainFocus/MainFocus";

const HomePageLayout = () => {
  return (
    <div>
      <HomeBaner></HomeBaner>
      <MainFocus></MainFocus>
      <HeadingSlider></HeadingSlider>
    </div>
  );
};

export default HomePageLayout;