import React from 'react';
import { type ComponentProps } from 'react';
import Flex from '../Flex';

interface FrameProps extends ComponentProps<'div'> {
  children: React.ReactNode;
}

function Frame({ children }: FrameProps) {
  return (
    <Flex
      flexCol={true}
      align="start"
      justify="start"
      className="w-screen h-screen relative bg-neutral-300"
    >
      <div className="max-w-lg ml-auto mr-auto bg-white w-full h-full relative">
        {children}
      </div>
    </Flex>
  );
}
export default Frame;
