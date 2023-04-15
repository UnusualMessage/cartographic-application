import {
  TitleSlide,
  FeaturesSlide,
  ExamplesSlide,
  OrderSlide,
} from "@features/layout";
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
