import styled from "styled-components";

const VARIANT = {
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
    fontSize: "1.125rem", // equivalent to 18px
    lineHeight: "1.22",
  },
  [VARIANT.medium]: {
    fontSize: "0.8125rem", // equivalent to 13px
    lineHeight: "1.23",
  },
  [VARIANT.small]: {
    fontSize: "0.75rem", // equivalent to 12px
    lineHeight: "1.25",
  },
  [VARIANT.x_small]: {
    fontSize: "0.6875rem", // equivalent to 11px
    lineHeight: "1.09",
  },
};

export const Text = styled.p<TextProps>`
  font-weight: 400;
  font-style: normal;
  font-size: ${(props) => TextStyles[props.variant]?.fontSize};
  line-height: ${(props) => TextStyles[props.variant]?.lineHeight};
`;

export const Heading = styled.h3`
  font-weight: 400;
  font-style: normal;
  font-size: ${TextStyles[VARIANT.small].fontSize};
  line-height: ${TextStyles[VARIANT.small].lineHeight};
`;
