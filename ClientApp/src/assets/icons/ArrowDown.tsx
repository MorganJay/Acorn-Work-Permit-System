import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#868686"
      d="M19.795.214a.7.7 0 0 0-.999 0L10.01 9.145 1.206.214a.7.7 0 0 0-1 0 .725.725 0 0 0 0 1.013l9.287 9.421c.138.14.31.21.5.21.172 0 .361-.07.5-.21l9.285-9.42a.71.71 0 0 0 .017-1.014Z"
    />
  </svg>
);
export { SvgComponent as ArrowDown };
