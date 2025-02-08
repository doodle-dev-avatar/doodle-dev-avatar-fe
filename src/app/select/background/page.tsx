import BackgroundImage from '@/components/common/Image/BackgroundImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectBackgroundPage() {
  const items = [
    { key: 'white', component: <BackgroundImage type="white" /> },
    { key: 'grid', component: <BackgroundImage type="grid" /> },
    { key: 'dot', component: <BackgroundImage type="dot" /> },
    { key: 'diagonal', component: <BackgroundImage type="diagonal" /> },
    { key: 'radial', component: <BackgroundImage type="radial" /> },
    { key: 'linear', component: <BackgroundImage type="linear" /> },
  ];

  return (
    <>
      <SlotMachine items={items} selectType="background" />
    </>
  );
}
