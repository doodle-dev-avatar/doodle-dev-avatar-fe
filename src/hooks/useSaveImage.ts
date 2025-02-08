import { useRef } from 'react';
import { toPng } from 'html-to-image';
import { useToast } from './use-toast';

export const useSaveImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const saveImage = () => {
    if (!imageRef.current) return;

    toPng(imageRef.current, {
      cacheBust: true,
    })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'developer-avatar.png';
        link.click();
      })
      .catch((error) => {
        console.error('이미지 저장 중 오류 발생:', error);
        toast({
          description: '이미지 저장에 실패했습니다.',
          duration: 2000,
        });
      });
  };

  return { imageRef, saveImage };
};
