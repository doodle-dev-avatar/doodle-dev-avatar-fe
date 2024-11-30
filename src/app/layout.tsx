import type { Metadata } from 'next';
import '../style/globals.css';

export const metadata: Metadata = {
  title: '개발자 프로필 생성기',
  description: '나만의 개발자 프로필을 만들어 보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
