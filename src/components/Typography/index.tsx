import styled from "styled-components";

export const VARIANT = {
  large: "large",
  medium: "medium",
  small: "small",
  x_small: "x_small",
} as const;

type Variant = keyof typeof VARIANT;

type TextProps = {
  variant: Variant;
};

const TextStyles = {
  [VARIANT.large]: {
    fontSize: "1.125rem",
    lineHeight: "1.22",
  },
  [VARIANT.medium]: {
    fontSize: "0.8125rem",
    lineHeight: "1.23",
  },
  [VARIANT.small]: {
    fontSize: "0.75rem",
    lineHeight: "1.25",
  },
  [VARIANT.x_small]: {
    fontSize: "0.6875rem",
    lineHeight: "1.09",
  },
};

export const Text = styled.p<TextProps>`
  margin: 0;
  font-weight: 400;
  font-style: normal;
  font-size: ${(props) => TextStyles[props.variant]?.fontSize};
  line-height: ${(props) => TextStyles[props.variant]?.lineHeight};
  font-feature-settings: "tnum" on, "lnum" on;
  color: currentColor;

  strong {
    font-size: inherit;
    font-weight: 500;
  }
`;

export const Heading = styled.h3`
  margin: 0;
  font-weight: 400;
  font-style: normal;
  color: currentColor;
  font-size: ${TextStyles[VARIANT.small].fontSize};
  line-height: ${TextStyles[VARIANT.small].lineHeight};
  font-feature-settings: "tnum" on, "lnum" on;
`;
