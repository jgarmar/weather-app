const breakpoints: { [index: string]: number } = {
  md: 768,
  lg: 1024,
};
//TODO: create type from breakpoints object {[anyof breakpoints]:number}
const mq = Object.keys(breakpoints)
  .map(key => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });

export default mq;
