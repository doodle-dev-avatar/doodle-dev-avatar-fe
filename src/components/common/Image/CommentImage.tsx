import { goodsIconType } from '@/components/constants';
import { GoodsType } from '@/types/selectType';

type props = {
  type: GoodsType[number];
};

const CommentImage = ({ type }: props) => {
  const IconSVG = goodsIconType[type];
  if (!IconSVG) return null;
  return <>{IconSVG}</>;
};

export default CommentImage;
