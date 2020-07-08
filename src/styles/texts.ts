import { css } from 'styled-components';
import colors from './colors';

const textsSizes = {
  heading: {
    h1: '25px',
    h2: '22px',
    h3: '16px',
  },
  paragraph: {
    text1: '16px',
    text2: '16px',
    text3: '14px',
    text4: '14px',
    button: '16px',
  },
};

export const h1 = css`
  font-family: 'Raleway Bold';
  font-style: normal;
  font-size: ${textsSizes.heading.h1};
  line-height: calc(${textsSizes.heading.h1} * 1.5);
  color: ${colors.neutrals.black};
`;

export const h2 = css`
  font-family: 'Raleway Bold';
  font-style: normal;
  font-size: ${textsSizes.heading.h2};
  line-height: calc(${textsSizes.heading.h2} * 1.5);
  color: ${colors.neutrals.black};
`;

export const h3 = css`
  font-family: 'Raleway Bold';
  font-style: normal;
  font-size: ${textsSizes.heading.h3};
  line-height: calc(${textsSizes.heading.h3} * 1.5);
  color: ${colors.neutrals.black};
`;

export const paragraph1 = css`
  font-family: 'Raleway Bold';
  font-style: normal;
  font-size: ${textsSizes.paragraph.text1};
  line-height: calc(${textsSizes.paragraph.text1} * 1.5);
  color: ${colors.neutrals.black};
`;

export const paragraph2 = css`
  font-family: 'Raleway Bold';
  font-style: normal;
  font-size: ${textsSizes.paragraph.text2};
  line-height: calc(${textsSizes.paragraph.text2} * 1.5);
  color: ${colors.neutrals.black};
`;

export const paragraph3 = css`
  font-family: 'Raleway Bold';
  font-style: normal;
  font-size: ${textsSizes.paragraph.text3};
  line-height: calc(${textsSizes.paragraph.text3} * 1.5);
  color: ${colors.neutrals.black};
`;

export const paragraph4 = css`
  font-family: 'Raleway Bold';
  font-style: normal;
  font-size: ${textsSizes.paragraph.text4};
  line-height: calc(${textsSizes.paragraph.text4} * 1.5);
  color: ${colors.neutrals.black};
`;

export const button = css`
  font-family: 'Raleway Bold';
  font-style: normal;
  font-size: ${textsSizes.paragraph.button};
  line-height: calc(${textsSizes.paragraph.button} * 1.5);
  color: ${colors.neutrals.black};
`;
