'use client';
import { useRouter } from 'next/navigation';
import Flex from '@/components/Flex';
import TitleText from '@/components/common/TitleText';
import Button from '@/components/common/Button';

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
        <Button text="이미지 저장하기" type="dark" />
        <Button text="공유" />
      </div>
      <Button text="다시하기" className="m-6" handleClick={handleClickRetry}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </Button>
    </Flex>
  );
}
