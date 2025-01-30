import { propsIconType } from '@/components/constants';
import { PropsType } from '@/types/selectType';

type props = {
  type: PropsType[number];
};

const PropsImage = ({ type }: props) => {
  const IconSVG = propsIconType[type];
  if (!IconSVG) return null;
  return <>{IconSVG}</>;
};

export default PropsImage;
