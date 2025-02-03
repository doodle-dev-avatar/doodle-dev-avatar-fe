import GoodsImage from '@/components/common/Image/GoodsImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectGoodsPage() {
  const items = [
    { key: 'none', component: <GoodsImage type="none" /> },
    { key: 'monster', component: <GoodsImage type="monster" /> },
    { key: 'plant', component: <GoodsImage type="plant" /> },
    { key: 'coffee', component: <GoodsImage type="coffee" /> },
    { key: 'books', component: <GoodsImage type="books" /> },
    { key: 'phone', component: <GoodsImage type="phone" /> },
  ];

  return (
    <>
      <SlotMachine items={items} selectType="goods" />
    </>
  );
}
