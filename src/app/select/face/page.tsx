import FaceImage from '@/components/common/Image/FaceImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectFacePage() {
  const items = [
    <FaceImage key="circle" type="circle" />,
    <FaceImage key="cookie" type="cookie" />,
    <FaceImage key="clover" type="clover" />,
    <FaceImage key="eight" type="eight" />,
  ];

  return (
    <>
      <SlotMachine items={items} />
    </>
  );
}
