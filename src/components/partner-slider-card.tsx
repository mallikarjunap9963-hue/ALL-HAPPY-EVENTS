
import type{ slider } from "../components/Slider-card";
interface Props {
 Slider: slider;
}

const PartnerSliderCard = ({ Slider }: Props) => {
  return (
    <div className="partners-slider text-center">
      <img src={Slider.img} alt={`Partner`} />
    </div>
  );
};

export default PartnerSliderCard;