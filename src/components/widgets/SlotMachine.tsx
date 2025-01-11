'use client';
import React, { useState, useEffect, useRef } from 'react';
import Flex from '../Flex';

interface SlotMachineProps {
  items: string[];
}

const SlotMachine: React.FC<SlotMachineProps> = ({ items }) => {
  const [isSpinning, setIsSpinning] = useState(true);
  const [result, setResult] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
    setResult(items[activeIndex]);
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
                {item}
              </Flex>
            ))}
          </Flex>
        ))}
      </Flex>
      <Flex className="space-x-4">
        <button
          onClick={handleStop}
          disabled={!isSpinning}
          className="px-6 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 disabled:bg-gray-600"
        >
          Stop
        </button>
      </Flex>
    </Flex>
  );
};

export default SlotMachine;
