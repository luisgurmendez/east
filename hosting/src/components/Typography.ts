import styled, { css } from 'styled-components';
import { colors } from '../utils/colors';

export const typeface = {
  family: "'Montserrat', sans-serif",
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  /** Converts a px font size to rem units based on 1rem == 16px */
  pxToRem(px: number): string {
    if (px <= 0) return '0rem';
    return Number(px / 16).toFixed(5) + 'rem';
  },
} as const;

export interface TypographyOptions {
  align?: 'left' | 'center' | 'right' | 'justify';
  display?: 'block' | 'inline';
  noWrap?: boolean;
  letMeMargin?: boolean;
}

const commonTypographyOptions = css<TypographyOptions>`
  ${(props) => (props.align ? `text-align: ${props.align};` : '')}
  ${(props) => (props.display ? `display: ${props.display};` : '')}
  ${(props) => (props.noWrap ? noWrapStyles : '')}
  color: ${colors.blue1};
  font-family: ${typeface.family};
`;

const noWrapStyles = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


export const SuperExtraLargeTitle = styled.h1`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(48)};
  font-weight: ${typeface.weight.bold};
  line-height: 1.25;
  margin: 0;
`;

SuperExtraLargeTitle.displayName = 'SuperExtraLargeTitle';

export const ExtraLargeTitle = styled.h1`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(32)};
  font-weight: ${typeface.weight.bold};
  line-height: 1.25;
  letter-spacing: -0.025em;
  margin: 0;
`;

ExtraLargeTitle.displayName = 'ExtraLargeTitle';

export const LargeTitle = styled.h2`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(28)};
  font-weight: ${typeface.weight.bold};
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
`;
LargeTitle.displayName = 'LargeTitle';

export const MediumTitle = styled.h3`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(20)};
  font-weight: ${typeface.weight.semibold};
  line-height: 1.3;
  margin: 0;
`;
MediumTitle.displayName = 'MediumTitle';

export const MediumLightTitle = styled.h3`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(28)};
  font-weight: ${typeface.weight.regular};
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
`;
MediumLightTitle.displayName = 'MediumLightTitle';

export const RegularTitle = styled.h4`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(18)};
  font-weight: ${typeface.weight.bold};
  line-height: 1.3;
  letter-spacing: 0.015em;
  margin: 0;
`;
RegularTitle.displayName = 'RegularTitle';

export const SmallTitle = styled.h5`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(16)};
  font-weight: ${typeface.weight.bold};
  line-height: 1.3;
  margin: 0;
`;
SmallTitle.displayName = 'SmallTitle';

export const TinyTitle = styled.h6`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(14)};
  font-weight: ${typeface.weight.bold};
  line-height: 1.35;
  letter-spacing: 0.01em;
  margin: 0;
`;
TinyTitle.displayName = 'TinyTitle';

export const Body = styled.p<TypographyOptions>`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(16)};
  font-weight: ${typeface.weight.regular};
  line-height: 24px;
  margin: 0;
  & + &,
  ${ExtraLargeTitle} + &,
  ${LargeTitle} + &,
  ${MediumTitle} + &,
  ${MediumLightTitle} + &,
  ${RegularTitle} + &,
  ${SmallTitle} + &,
  ${TinyTitle} + & {
    ${(props) => (props.letMeMargin ? '' : 'margin-top: 1rem')};
  }
`;

Body.displayName = 'Body';

export const SmallBody = styled.p<TypographyOptions>`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(14)};
  font-weight: ${typeface.weight.regular};
  line-height: 21px;
  margin: 0;
  & + & {
    ${(props) => (props.letMeMargin ? '' : 'margin-top: 0.875rem;')}
  }
  & + &,
  ${ExtraLargeTitle} + &,
  ${LargeTitle} + &,
  ${MediumTitle} + &,
  ${MediumLightTitle} + &,
  ${RegularTitle} + &,
  ${SmallTitle} + &,
  ${TinyTitle} + &,
  & + ${Body}, ${Body} + & {
    ${(props) => (props.letMeMargin ? '' : 'margin-top: 1rem;')}
  }
`;

SmallBody.displayName = 'SmallBody';

export const LegalBody = styled.p<TypographyOptions>`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(13)};
  font-weight: ${typeface.weight.regular};
  line-height: 19.5px;
  margin: 0;
  & + & {
    ${(props) => (props.letMeMargin ? '' : 'margin-top: 0.875rem;')}
  }
  & + &,
  ${ExtraLargeTitle} + &,
  ${LargeTitle} + &,
  ${MediumTitle} + &,
  ${MediumLightTitle} + &,
  ${RegularTitle} + &,
  ${SmallTitle} + &,
  ${TinyTitle} + &,
  & + ${Body}, ${Body} + &,
  & + ${SmallBody}, ${SmallBody} + & {
    ${(props) => (props.letMeMargin ? '' : 'margin-top: 1rem;')}
  }
`;

LegalBody.displayName = 'LegalBody';

export const TinyBody = styled.p<TypographyOptions>`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(13)};
  font-weight: ${typeface.weight.regular};
  line-height: 19.5px;
  margin: 0;
  & + & {
    ${(props) => (props.letMeMargin ? '' : 'margin-top: 0.875rem;')}
  }
  & + &,
  ${ExtraLargeTitle} + &,
  ${LargeTitle} + &,
  ${MediumTitle} + &,
  ${MediumLightTitle} + &,
  ${RegularTitle} + &,
  ${SmallTitle} + &,
  ${TinyTitle} + &,
  & + ${Body}, ${Body} + &,
  & + ${SmallBody}, ${SmallBody} + &,
  & + ${LegalBody}, ${LegalBody} + & {
    ${(props) => (props.letMeMargin ? '' : 'margin-top: 1rem;')}
  }
`;

TinyBody.displayName = 'TinyBody';

export const Caption = styled.span<TypographyOptions>`
  ${commonTypographyOptions};
  font-size: ${typeface.pxToRem(13)};
  font-weight: ${typeface.weight.regular};
  line-height: 19.5px;
`;

Caption.displayName = 'Caption';