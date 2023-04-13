import { TitleSlide, FeaturesSlide } from "@features/landing";
import { Slides } from "@widgets/wrappers";

const Landing = () => {
  return (
    <Slides>
      <TitleSlide />
      <FeaturesSlide />
    </Slides>
  );
};

export default Landing;
