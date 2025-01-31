import clsx from 'clsx';
import { useSelectStore } from '@/store/useSelectStore';

export const Comment = () => {
  const comment = useSelectStore((state) => state.comment) || 'none';

  return (
    <div className="absolute text-center w-20 h-12 top-1.5 right-0.5 pt-1">
      <p
        className={clsx('text-base font-semibold', {
          'text-base':
            comment === 'merge' || comment === 'pr' || comment === 'review',
        })}
      >
        {comment === 'none' && '...'}
        {comment === 'lgtm' && 'LGTM👍'}
        {comment === 'merge' && '머지했어요'}
        {comment === 'pr' && 'PR 올렸어요'}
        {comment === 'review' && '코드리뷰 중'}
        {comment === 'why' && '왜 되지?'}
      </p>
    </div>
  );
};
