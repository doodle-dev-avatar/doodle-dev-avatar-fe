import Link from 'next/link';
import Flex from '@/components/Flex';
import TitleText from '@/components/common/TitleText';
import Button from '@/components/common/Button';
export default function Home() {
  return (
    <Flex
      flexCol={true}
      align="center"
      justify="center"
      className="justify-center h-full"
    >
      <TitleText text="개발자 프사 생성기" />
      <div className="w-48 h-48 mt-8 bg-neutral-300" />
      <Link href="/select/face">
        <Button className="pt-6 text-lg">시작하기</Button>
      </Link>
    </Flex>
  );
}
