import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectFacePage() {
  const items = ['🍎', '🍌', '🍒', '🍌', '🍒', '🍒'];

  return (
    <>
      <SlotMachine items={items} />
    </>
  );
}
