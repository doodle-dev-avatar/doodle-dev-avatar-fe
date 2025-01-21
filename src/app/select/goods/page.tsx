import GoodsImage from '@/components/common/Image/GoodsImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectGoodsPage() {
  const items = [
    <GoodsImage key="none" type="none" />,
    <GoodsImage key="monster" type="monster" />,
    <GoodsImage key="plant" type="plant" />,
    <GoodsImage key="coffee" type="coffee" />,
    <GoodsImage key="books" type="books" />,
    <GoodsImage key="phone" type="phone" />,
  ];

  return (
    <>
      <SlotMachine items={items} selectType="goods" />
    </>
  );
}
