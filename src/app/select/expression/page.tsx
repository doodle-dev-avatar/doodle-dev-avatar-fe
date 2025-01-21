import ExpressionImage from '@/components/common/Image/ExpressionImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectExpressionPage() {
  const items = [
    <ExpressionImage key="smile" type="smile" />,
    <ExpressionImage key="sad" type="sad" />,
    <ExpressionImage key="angry" type="angry" />,
    <ExpressionImage key="surprised" type="surprised" />,
    <ExpressionImage key="glow" type="glow" />,
    <ExpressionImage key="heart" type="heart" />,
  ];

  return (
    <>
      <SlotMachine items={items} selectType="expression" />
    </>
  );
}
