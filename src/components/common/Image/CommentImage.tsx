import { commentIconType } from '@/components/constants';
import { CommentType } from '@/types/selectType';

type props = {
  type: CommentType[number];
};

const CommentImage = ({ type }: props) => {
  const IconSVG = commentIconType[type];
  if (!IconSVG) return null;
  return <>{IconSVG}</>;
};

export default CommentImage;
