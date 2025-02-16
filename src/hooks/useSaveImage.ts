import { useRef } from 'react';
import { useToast } from './use-toast';
import html2canvas from 'html2canvas';

const applyInlineStyles = (element: HTMLElement) => {
  const computedStyles = window.getComputedStyle(element);
  for (const key of computedStyles) {
    element.style.setProperty(key, computedStyles.getPropertyValue(key));
  }
};

export const useSaveImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const saveImage = async () => {
    if (!imageRef.current) return;
    try {
      applyInlineStyles(imageRef.current);
      const canvas = await html2canvas(imageRef.current, {
        useCORS: true,
        logging: false,
        width: 240,
        height: 240,
        scale: 3,
      });
      const dataUrl = canvas.toDataURL('/image/png', 1.0);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'developer-avatar.png';
      link.click();
    } catch (error) {
      console.error(error);
      toast({
        description: '이미지 저장에 실패했습니다.',
        duration: 2000,
      });
    }
  };

  return { imageRef, saveImage };
};
