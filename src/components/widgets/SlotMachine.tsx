'use client';
import React, { useState, useEffect } from 'react';

interface SlotMachineProps {
  items: string[];
}

const SlotMachine: React.FC<SlotMachineProps> = ({ items }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [interval, setIntervalState] = useState<NodeJS.Timeout | undefined>(
    undefined,
  );

  useEffect(() => {
    if (isSpinning) {
      const newInterval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 100);
      setIntervalState(newInterval);
    } else {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    }
    return () => {
      if (interval !== undefined) {
        clearInterval(interval);
      }
    };
  }, [isSpinning, items.length]);

  const handleStart = () => {
    setIsSpinning(true);
    setResult(null);
  };

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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="flex flex-col gap-4 mb-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4">
            {row.map((item, index) => (
              <div
                key={index}
                className={`w-20 h-20 flex items-center justify-center text-3xl font-bold border-4 rounded ${
                  index + rowIndex * Math.ceil(items.length / 2) === activeIndex
                    ? 'border-red-500'
                    : 'border-gray-700'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleStart}
          disabled={isSpinning}
          className="px-6 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 disabled:bg-gray-600"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={!isSpinning}
          className="px-6 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 disabled:bg-gray-600"
        >
          Stop
        </button>
      </div>
      {result && (
        <div className="text-2xl font-bold">
          Result: <span className="text-yellow-500">{result}</span>
        </div>
      )}
    </div>
  );
};

export default SlotMachine;
