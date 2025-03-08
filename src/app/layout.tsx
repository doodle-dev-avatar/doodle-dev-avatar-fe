import Frame from '@/components/Layout';
import type { Metadata } from 'next';
import '../style/globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: '개발자 프로필 생성기',
  description: '나만의 개발자 프로필을 만들어 보세요!',
  openGraph: {
    type: 'website',
    url: 'https://doodle-dev.netlify.app/',
    title: '개발자 프로필 생성기',
    description: '나만의 개발자 프로필을 만들어 보세요!',
    siteName: '개발자 프로필 생성기',
    images: [{
      url: './thumbnail.png',
      width: 1200,
      height: 630,
    }],
    locale: 'ko_KR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Frame>{children}</Frame>
        <Toaster />
      </body>
    </html>
  );
}
