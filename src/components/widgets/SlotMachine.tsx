'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Flex from '../Flex';
import Button from '../common/Button';
import { useSelectStore } from '@/store/useSelectStore';

interface SlotMachineProps {
  items: { key: string; component: JSX.Element }[];
  selectType:
    | 'background'
    | 'expression'
    | 'face'
    | 'comment'
    | 'goods'
    | 'props';
}

const SlotMachine: React.FC<SlotMachineProps> = ({ items, selectType }) => {
  const { setSelectByType } = useSelectStore();
  const [isSpinning, setIsSpinning] = useState(true);
  const [isNext, setIsNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (isSpinning) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isSpinning]);

  const handleStop = () => {
    setIsSpinning(false);
    const selectedItem = items[activeIndex];
    setSelectByType(selectType, selectedItem.key || '');
    setIsNext(true);
  };

  const handleNext = () => {
    const routes: Record<string, string> = {
      face: '/select/expression',
      expression: '/select/props',
      props: '/select/goods',
      goods: '/select/comment',
      comment: '/select/background',
    };

    if (selectType === 'background') {
      setIsNext(false);
    } else {
      router.push(routes[selectType]);
    }
  };

  const rows = [];
  if (items.length <= 4) {
    rows.push(items);
  } else if (items.length <= 8) {
    rows.push(items.slice(0, Math.ceil(items.length / 2)));
    rows.push(items.slice(Math.ceil(items.length / 2)));
  }

  return (
    <Flex
      className="h-screen text-white"
      flexCol
      align="center"
      justify="center"
    >
      <Flex className="gap-4 mb-6" flexCol>
        {rows.map((row, rowIndex) => (
          <Flex key={rowIndex} className="gap-4" justify="center">
            {row.map((item, index) => (
              <Flex
                align="center"
                justify="center"
                key={index}
                className={`w-20 h-20 flex text-3xl font-bold border-4 rounded ${
                  index + rowIndex * Math.ceil(items.length / 2) === activeIndex
                    ? 'border-red-500'
                    : 'border-gray-700'
                }`}
              >
                {item.component}
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
      <Flex className="space-x-4">
        {!isNext ? (
          <Button
            handleClick={handleStop}
            disabled={!isSpinning}
            className="px-6 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 disabled:bg-gray-600"
          >
            Stop
          </Button>
        ) : selectType === 'background' ? (
          <Button
            handleClick={() => router.push('/result')}
            className="px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600"
          >
            결과 보러가기
          </Button>
        ) : (
          <Button
            handleClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          >
            Next!
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default SlotMachine;
