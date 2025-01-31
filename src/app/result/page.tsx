'use client';
import { useRouter } from 'next/navigation';
import Flex from '@/components/Flex';
import TitleText from '@/components/common/TitleText';
import Button from '@/components/common/Button';
import { ArrowPathIcon } from '@/components/Icons/ArrowPathIcon';
import { ShareIcon } from '@/components/Icons/ShareIcon';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { useToast } from '@/hooks/use-toast';
import * as Toast from '@radix-ui/react-toast';
import { useSaveImage } from '@/hooks/useSaveImage';

import { Background } from '@/components/result/Background';
import { Face } from '@/components/result/Face';
import { Comment } from '@/components/result/Comment';
import { Goods } from '@/components/result/Goods';

export default function ResultPage() {
  const router = useRouter();
  const handleClickRetry = () => {
    router.push('/');
  };

  const { toast } = useToast();

  const { copyToClipboard } = useCopyToClipboard();
  const handleCopyLink = () => {
    const linkToCopy = window.location.href;
    copyToClipboard(linkToCopy);
    toast({
      description: '링크가 복사되었습니다.',
      duration: 2000,
    });
  };

  const { imageRef, saveImage } = useSaveImage();

  return (
    <Flex
      flexCol={true}
      align="center"
      justify="center"
      className="justify-center h-full"
    >
      <TitleText text="개발자 프사 생성기" />
      <div className="h-8" />
      <div ref={imageRef} className="w-60 h-60 relative">
        <Background />
        <Face />
        <Comment />
        <Goods />
      </div>
      <div className="w-60 mt-8 flex justify-around z-50">
        <Button type="dark" handleClick={saveImage}>
          이미지 저장하기
        </Button>
        <Toast.Provider duration={3000}>
          <Button className="items-center" handleClick={handleCopyLink}>
            <ShareIcon className="mr-1" />
            공유
          </Button>
        </Toast.Provider>
      </div>
      <Button className="m-6 items-center" handleClick={handleClickRetry}>
        다시하기
        <ArrowPathIcon className="ml-1" />
      </Button>
    </Flex>
  );
}
