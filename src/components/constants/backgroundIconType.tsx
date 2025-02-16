import { BackgroundType } from '@/types/selectType';
import white from '@/assets/background/background_white.svg';
import grid from '@/assets/background/background_grid.svg';
import dot from '@/assets/background/background_dot.svg';
import diagonal from '@/assets/background/background_diagonal.svg';
import radial from '@/assets/background/background_radial.svg';
import linear from '@/assets/background/background_linear.svg';

export const backgroundIconType: Record<
  BackgroundType[number],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  white: white,
  grid: grid,
  dot: dot,
  diagonal: diagonal,
  radial: radial,
  linear: linear,
};
