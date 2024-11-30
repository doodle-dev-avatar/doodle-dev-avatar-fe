import clsx from 'clsx';
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react';

export type FlexProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  className?: string;
  width?: number | string;
  height?: number | string;
  flexCol?: boolean;
  background?: string;
  align?: 'center' | 'baseline' | 'end' | 'start';
  justify?:
    | 'center'
    | 'baseline'
    | 'end'
    | 'start'
    | 'around'
    | 'between'
    | 'evenly';
  horizontalScrollAble?: boolean;
};

const alingClassMap = {
  center: 'items-center',
  baseline: 'items-baseline',
  end: 'items-end',
  start: 'items-start',
};

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      width,
      height,
      background,
      className = '',
      flexCol,
      align,
      justify,
      children,
      ...props
    },
    ref,
  ) => {
    const flexDirectionClass = flexCol ? 'flex-col' : '';
    const alingClass = align ? alingClassMap[align] : 'items-center';
    const justifyClass = justify ? `justify-${justify}` : '';
    return (
      <div
        {...props}
        ref={ref}
        style={{ width, height, background, ...props.style }}
        className={clsx([
          'flex',
          className,
          alingClass,
          justifyClass,
          flexDirectionClass,
        ])}
      >
        {children}
      </div>
    );
  },
);

Flex.displayName = 'Flex';

export default Flex;
