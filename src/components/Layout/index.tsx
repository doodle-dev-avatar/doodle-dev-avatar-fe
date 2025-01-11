import React from 'react';
import { type ComponentProps } from 'react';
import Flex from '../Flex';
import Footer from '../Footer';

interface FrameProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

function Frame({ children }: FrameProps) {
  return (
    <Flex
      flexCol={true}
      align="start"
      justify="start"
      className="w-screen h-screen relative bg-neutral-200"
    >
      <div className="max-w-lg ml-auto mr-auto bg-white w-full h-full relative">
        {children}
        <Footer />
      </div>
    </Flex>
  );
}
export default Frame;
