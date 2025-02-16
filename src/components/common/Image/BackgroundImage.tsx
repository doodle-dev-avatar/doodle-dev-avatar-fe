import { backgroundIconType } from '@/components/constants';
import { BackgroundType } from '@/types/selectType';

type props = {
  type: BackgroundType[number];
};

const BackgroundImage = ({ type }: props) => {
  const IconSVG = backgroundIconType[type];
  if (!IconSVG) return null;
  return <IconSVG width="240" height="240" />;
};

export default BackgroundImage;
