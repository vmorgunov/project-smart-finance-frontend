const breakpoints = [320, 678, 1280];

const Breakpoints = {
  sm: 0,
  md: 1,
  lg: 2,
};

function mq(minWidth) {
  return `@media screen and (min-width: ${breakpoints[minWidth]}px)`;
}

export { mq, Breakpoints };
