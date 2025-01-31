import clsx from 'clsx';
import FaceImage from '../common/Image/FaceImage';
import ExpressionImage from '../common/Image/ExpressionImage';
import PropsImage from '../common/Image/PropsImage';
import Flex from '../Flex';
import { useSelectStore } from '@/store/useSelectStore';

export const Face = () => {
  const face = useSelectStore((state) => state.face) || 'circle';
  const expression = useSelectStore((state) => state.expression) || 'smile';
  const props = useSelectStore((state) => state.props) || 'glasses';

  console.log(face, expression, props);
  return (
    <Flex
      align="center"
      justify="center"
      className="w-28 absolute top-6 left-1/2 -translate-x-1/2"
    >
      <FaceImage type={face} />
      <Flex className="w-12 absolute">
        <ExpressionImage type={expression} />
      </Flex>
      <Flex
        className={clsx('absolute', {
          'w-32 top-0': props === 'headphone',
          'w-32 top-15': props === 'airpods',
          'w-11/12 top-12': props === 'glasses',
          'top-10 -right-1': props === 'sweat',
          'w-32': props === 'hoodie',
        })}
      >
        <PropsImage type={props} />
      </Flex>
    </Flex>
  );
};
