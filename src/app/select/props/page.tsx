import PropsImage from '@/components/common/Image/PropsImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectPropsPage() {
  const items = [
    <PropsImage key="none" type="none" />,
    <PropsImage key="headphone" type="headphone" />,
    <PropsImage key="airpods" type="airpods" />,
    <PropsImage key="glasses" type="glasses" />,
    <PropsImage key="sweat" type="sweat" />,
    <PropsImage key="hoodie" type="hoodie" />,
  ];

  return (
    <>
      <SlotMachine items={items} selectType="props" />
    </>
  );
}
