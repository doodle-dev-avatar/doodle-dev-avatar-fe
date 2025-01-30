import BackgroundImage from '@/components/common/Image/BackgroundImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectBackgroundPage() {
  const items = [
    <BackgroundImage key="white" type="white" />,
    <BackgroundImage key="grid" type="grid" />,
    <BackgroundImage key="dot" type="dot" />,
    <BackgroundImage key="diagonal" type="diagonal" />,
    <BackgroundImage key="radial" type="radial" />,
    <BackgroundImage key="linear" type="linear" />,
  ];

  return (
    <>
      <SlotMachine items={items} selectType="background" />
    </>
  );
}
