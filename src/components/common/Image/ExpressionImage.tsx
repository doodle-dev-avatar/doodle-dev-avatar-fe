import { expressionIconType } from '@/components/constants';
import { ExpressionType } from '@/types/selectType';

type props = {
  type: ExpressionType[number];
};

const ExpressionImage = ({ type }: props) => {
  const IconSVG = expressionIconType[type];
  if (!IconSVG) return null;
  return <>{IconSVG}</>;
};

export default ExpressionImage;
