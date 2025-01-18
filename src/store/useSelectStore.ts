import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  FaceType,
  ExpressionType,
  PropsType,
  GoodsType,
  CommentType,
  BackgroundType,
} from '@/types/selectType';

export interface SelectStore {
  face: FaceType[number];
  expression: ExpressionType[number];
  props: PropsType[number];
  goods: GoodsType[number];
  comment: CommentType[number];
  background: BackgroundType[number];
  setFace: (face: FaceType[number]) => void;
  setExpression: (expression: ExpressionType[number]) => void;
  setProps: (props: PropsType[number]) => void;
  setGoods: (goods: GoodsType[number]) => void;
  setComment: (comment: CommentType[number]) => void;
  setBackground: (background: BackgroundType[number]) => void;
}

export const useSelectStore = create(
  persist<SelectStore>(
    (set) => ({
      face: 'circle',
      expression: 'smile',
      props: 'none',
      goods: 'none',
      comment: 'none',
      background: 'white',
      setFace: (face) => set({ face }),
      setExpression: (expression) => set({ expression }),
      setProps: (props) => set({ props }),
      setGoods: (goods) => set({ goods }),
      setComment: (comment) => set({ comment }),
      setBackground: (background) => set({ background }),
    }),
    {
      name: 'selectStorage',
    },
  ),
);
