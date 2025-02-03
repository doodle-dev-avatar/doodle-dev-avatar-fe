import PropsImage from '@/components/common/Image/PropsImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectPropsPage() {
  const items = [
    { key: 'none', component: <PropsImage type="none" /> },
    { key: 'headphone', component: <PropsImage type="headphone" /> },
    { key: 'airpods', component: <PropsImage type="airpods" /> },
    { key: 'glasses', component: <PropsImage type="glasses" /> },
    { key: 'sweat', component: <PropsImage type="sweat" /> },
    { key: 'hoodie', component: <PropsImage type="hoodie" /> },
  ];

  return (
    <>
      <SlotMachine items={items} selectType="props" />
    </>
  );
}
