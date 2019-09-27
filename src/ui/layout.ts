import {
  BackgroundSetProps,
  BorderSetProps,
  DisplaySetProps,
  FlexSetProps,
  GridSetProps,
  HeightProps,
  LayoutSetProps,
  PositionSetProps,
  SizeProps,
  SpaceSetProps,
  TransformSetProps,
  TransitionProps,
  WidthProps,
  backgroundSet,
  borderSet,
  displaySet,
  flexSet,
  gridSet,
  height,
  layoutSet,
  overflow,
  positionSet,
  size,
  spaceSet,
  transformSet,
  transition,
  width,
} from 'onno-react';
import styled from '@emotion/styled';
import th from './theme';

// Div is the base layout component
interface CustomDivProps {
  alignEnd?: boolean;
  alignStart?: boolean;
  columnOnMobile?: boolean;
  columnReverseOnMobile?: boolean;
  grow?: number;
  inline?: boolean;
  justifyEnd?: boolean;
  justifyStart?: boolean;
  pointer?: boolean;
  relative?: boolean;
  wrap?: boolean;
}
export type DivProps = BackgroundSetProps &
  BorderSetProps &
  SpaceSetProps &
  DisplaySetProps &
  FlexSetProps &
  GridSetProps &
  LayoutSetProps &
  TransformSetProps &
  PositionSetProps &
  CustomDivProps;

const customOptions: (props: CustomDivProps) => any = ({
  alignEnd,
  alignStart,
  columnOnMobile,
  columnReverseOnMobile,
  grow,
  inline,
  justifyEnd,
  justifyStart,
  pointer,
  relative,
  wrap,
}) => ({
  alignItems: alignStart ? 'flex-start' : alignEnd ? 'flex-end' : undefined,
  cursor: pointer ? 'pointer' : undefined,
  display: inline ? 'inline-block' : undefined,
  flexGrow: grow,
  flexWrap: wrap ? 'wrap' : undefined,
  justifyContent: justifyStart
    ? 'flex-start'
    : justifyEnd
    ? 'flex-end'
    : undefined,
  position: relative ? 'relative' : undefined,
  [th.breakpointQueries.small]:
    columnOnMobile || columnReverseOnMobile
      ? { flexDirection: columnReverseOnMobile ? 'column-reverse' : 'column' }
      : {},
});

export const divPropsSet = [
  backgroundSet,
  borderSet,
  displaySet,
  flexSet,
  gridSet,
  layoutSet,
  spaceSet,
  transformSet,
  positionSet,
  customOptions,
];

const Div = styled.div<DivProps>(...divPropsSet);
const Span = styled.span<DivProps>(...divPropsSet);

const Flex = styled(Div)<DivProps>(
  { alignItems: 'center', display: 'flex' },
  ...divPropsSet,
);
const FlexBetween = styled(Flex)<DivProps>(
  {
    justifyContent: 'space-between',
  },
  ...divPropsSet,
);
const FlexCentered = styled(Flex)<DivProps>(
  {
    justifyContent: 'center',
  },
  ...divPropsSet,
);
const FlexColumn = styled(Flex)<DivProps>(
  {
    flexDirection: 'column',
  },
  ...divPropsSet,
);

const Grid = styled(Div)<DivProps>(
  {
    display: 'grid',
    gridGap: 1,
    gridAutoRows: 'min-content',
    gridAutoFlow: 'row',
    gridTemplateColumns: ['repeat(2, 1fr)', `repeat(5, 1fr)`],
  },
  ...divPropsSet,
);

export interface ScrollProps {
  showScrollBar?: boolean;
}
const Scroll = styled(Div)<DivProps & ScrollProps & any>(
  ({ showScrollBar = true }: { showScrollBar: boolean }) => ({
    ...th.scrollStyles(showScrollBar),
  }),
  overflow,
  ...divPropsSet,
);
const ScrollFlex = styled(FlexBetween)<DivProps & ScrollProps & any>(
  ({ showScrollBar = true }: { showScrollBar: boolean }) => ({
    ...th.scrollStyles(showScrollBar),
  }),
  overflow,
  ...divPropsSet,
);

const PageContent = styled(Div)<DivProps>(
  {
    maxWidth: th.widths.maxContent,
    margin: '0 auto',
  },
  ...divPropsSet,
);

export type ImgProps = HeightProps & SizeProps & TransitionProps & WidthProps;
const Img = styled.img<ImgProps & any>(height, size, transition, width);

const Primary = styled(Span)<DivProps>(
  {
    color: th.colors.brand.primary,
  },
  ...divPropsSet,
);

export default {
  Div,
  Flex,
  FlexBetween,
  FlexCentered,
  FlexColumn,
  Grid,
  Primary,
  Img,
  PageContent,
  Scroll,
  ScrollFlex,
  Span,
};
