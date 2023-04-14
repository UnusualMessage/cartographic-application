import {
  TitleSlide,
  FeaturesSlide,
  ExamplesSlide,
  OrderSlide,
} from "@features/landing";
import { Slides } from "@widgets/wrappers";

const Landing = () => {
  return (
    <Slides>
      <TitleSlide />
      <FeaturesSlide />
      <ExamplesSlide />
      <OrderSlide />
    </Slides>
  );
};

export default Landing;
