import { backgroundIconType } from '@/components/constants';
import { BackgroundType } from '@/types/selectType';

type props = {
  type: BackgroundType[number];
};

const BackgroundImage = ({ type }: props) => {
  const IconSVG = backgroundIconType[type];
  if (!IconSVG) return null;
  return <>{IconSVG}</>;
};

export default BackgroundImage;
