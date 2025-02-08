import CommentImage from '@/components/common/Image/CommentImage';
import SlotMachine from '@/components/widgets/SlotMachine';

export default function SelectCommentPage() {
  const items = [
    { key: 'none', component: <CommentImage type="none" /> },
    { key: 'lgtm', component: <CommentImage type="lgtm" /> },
    { key: 'merge', component: <CommentImage type="merge" /> },
    { key: 'pr', component: <CommentImage type="pr" /> },
    { key: 'review', component: <CommentImage type="review" /> },
    { key: 'why', component: <CommentImage type="why" /> },
  ];

  return (
    <>
      <SlotMachine items={items} selectType="comment" />
    </>
  );
}
