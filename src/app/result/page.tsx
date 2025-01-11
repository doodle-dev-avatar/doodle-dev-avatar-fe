'use client';
import { useRouter } from 'next/navigation';
import Flex from '@/components/Flex';
import TitleText from '@/components/common/TitleText';
import Button from '@/components/common/Button';
import { ArrowPathIcon } from '@/components/Icons/ArrowPathIcon';
import { ShareIcon } from '@/components/Icons/ShareIcon';

export default function ResultPage() {
  const router = useRouter();
  const handleClickRetry = () => {
    router.push('/');
  };

  return (
    <Flex
      flexCol={true}
      align="center"
      justify="center"
      className="justify-center h-full"
    >
      <TitleText text="개발자 프사 생성기" />
      <div className="w-60 h-60 mt-8 bg-neutral-300" />
      <div className="w-60 mt-8 flex justify-around">
        <Button type="dark">이미지 저장하기</Button>
        <Button className="items-center">
          <ShareIcon className="mr-1" />
          공유
        </Button>
      </div>
      <Button className="m-6 items-center" handleClick={handleClickRetry}>
        다시하기
        <ArrowPathIcon className="ml-1" />
      </Button>
    </Flex>
  );
}
