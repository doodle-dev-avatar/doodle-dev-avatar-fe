import ExpressionImage from '@/components/common/Image/ExpressionImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectExpressionPage() {
  const items = [
    { key: 'smile', component: <ExpressionImage type="smile" /> },
    { key: 'sad', component: <ExpressionImage type="sad" /> },
    { key: 'angry', component: <ExpressionImage type="angry" /> },
    { key: 'surprised', component: <ExpressionImage type="surprised" /> },
    { key: 'glow', component: <ExpressionImage type="glow" /> },
    { key: 'heart', component: <ExpressionImage type="heart" /> },
  ];

  return (
    <>
      <SlotMachine items={items} selectType="expression" />
    </>
  );
}
