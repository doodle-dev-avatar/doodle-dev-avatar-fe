import FaceImage from '@/components/common/Image/FaceImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectFacePage() {
  const items = [
    { key: 'circle', component: <FaceImage type="circle" /> },
    { key: 'cookie', component: <FaceImage type="cookie" /> },
    { key: 'clover', component: <FaceImage type="clover" /> },
    { key: 'eight', component: <FaceImage type="eight" /> },
  ];

  return (
    <>
      <SlotMachine items={items} selectType="face" />
    </>
  );
}
