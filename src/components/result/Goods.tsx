import clsx from 'clsx';
import { useSelectStore } from '@/store/useSelectStore';
import GoodsImage from '../common/Image/GoodsImage';
import Flex from '../Flex';

export const Goods = () => {
  const goods = useSelectStore((state) => state.goods) || 'monster';
  return (
    <Flex
      className={clsx('absolute', {
        'w-14 bottom-1 left-2': goods === 'monster',
        'w-12 bottom-2 left-1': goods === 'plant',
        'w-12 bottom-3 left-2': goods === 'coffee',
        'w-14 bottom-0 left-0': goods === 'books',
        'w-7 bottom-0 left-3': goods === 'phone',
      })}
    >
      <GoodsImage type={goods} />
    </Flex>
  );
};
