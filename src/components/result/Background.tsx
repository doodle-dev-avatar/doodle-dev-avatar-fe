import BackgroundImage from '../common/Image/BackgroundImage';
import Flex from '../Flex';
import { useSelectStore } from '@/store/useSelectStore';

export const Background = () => {
  const background = useSelectStore((state) => state.background);

  return (
    <Flex className="w-60 h-60">
      <BackgroundImage type={background} />
    </Flex>
  );
};
