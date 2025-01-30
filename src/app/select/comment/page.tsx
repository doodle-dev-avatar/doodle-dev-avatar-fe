import CommentImage from '@/components/common/Image/CommentImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectCommentPage() {
  const items = [
    <CommentImage key="none" type="none" />,
    <CommentImage key="lgtm" type="lgtm" />,
    <CommentImage key="merge" type="merge" />,
    <CommentImage key="pr" type="pr" />,
    <CommentImage key="review" type="review" />,
    <CommentImage key="why" type="why" />,
  ];

  return (
    <>
      <SlotMachine items={items} selectType="comment" />
    </>
  );
}
