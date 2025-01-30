import { faceIconType } from '@/components/constants';
import { FaceType } from '@/types/selectType';

type props = {
  type: FaceType[number];
};

const FaceImage = ({ type }: props) => {
  const IconSVG = faceIconType[type];
  if (!IconSVG) return null;
  return <>{IconSVG}</>;
};

export default FaceImage;
