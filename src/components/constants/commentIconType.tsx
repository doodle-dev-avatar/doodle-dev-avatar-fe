import { CommentType } from '@/types/selectType';

export const commentIconType = {
  lgtm: <div className="flex text-black">LGTM👍</div>,
  merge: <div className="text-black text-sm">머지했어요</div>,
  pr: <div className="text-black text-sm">PR 올렸어요</div>,
  review: <div className="text-black">코드리뷰 중</div>,
  why: <div className="text-black">왜 되지?</div>,
  none: <div className="text-black">...</div>,
} as Record<CommentType[number], JSX.Element>;
