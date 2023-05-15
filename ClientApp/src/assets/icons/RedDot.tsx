import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <circle cx={5} cy={5} r={5} fill="#E61E1E" />
  </svg>
);
export { SvgComponent as RedDot };
