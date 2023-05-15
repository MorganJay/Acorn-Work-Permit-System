import { SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} style={{ padding: 4}} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.457 9.028c.29 0 .524.237.524.53 0 .016-.099 1.27-.121 1.655-.04.666-.295 1.345-.682 1.817-.54.659-1.227.966-2.16.969H8.313L6.674 14a.529.529 0 0 1-.525-.532c0-.294.235-.532.526-.532H8.521l1.909-.001h.585c.632-.002 1.011-.166 1.354-.584.243-.296.417-.768.443-1.202.022-.391.13-1.632.13-1.632a.522.522 0 0 1 .515-.49Zm-12.914 0c.275 0 .494.217.515.49 0 0 .108 1.24.131 1.631.026.434.2.906.442 1.2.343.42.723.584 1.354.585h.309l.107.001h.379a.531.531 0 0 1-.001 1.064H2.984c-.935-.003-1.622-.31-2.162-.97-.386-.471-.642-1.15-.681-1.816-.023-.386-.122-1.64-.122-1.655 0-.293.235-.53.524-.53ZM7 8.961c.29 0 .525.239.525.533v.918a.529.529 0 0 1-.525.532.529.529 0 0 1-.525-.533v-.917c0-.294.235-.533.525-.533ZM7.904 0C8.957 0 9.83.8 9.96 1.831h1.375c1.47 0 2.666 1.212 2.666 2.7v2.46a.535.535 0 0 1-.235.444c-1.444.968-3.159 1.614-4.957 1.866a.527.527 0 0 1-.581-.397 1.267 1.267 0 0 0-1.23-.96c-.59 0-1.09.387-1.246.963a.52.52 0 0 1-.58.386C3.385 9.042 1.678 8.4.236 7.435A.533.533 0 0 1 0 6.991v-2.46c0-1.488 1.199-2.7 2.673-2.7h1.368A2.084 2.084 0 0 1 6.096 0h1.808Zm0 1.064H6.096a1.03 1.03 0 0 0-1.022 1.034v.263a.54.54 0 0 1-.153.377.521.521 0 0 1-.372.156l-1.875.001c-.896 0-1.623.734-1.623 1.637V6.7a10.863 10.863 0 0 0 3.86 1.474A2.346 2.346 0 0 1 6.996 6.88c.897 0 1.695.515 2.079 1.3a10.88 10.88 0 0 0 3.873-1.48V4.53c0-.902-.724-1.636-1.615-1.636H7a.529.529 0 0 1-.525-.532c0-.294.235-.532.525-.532h1.891a1.026 1.026 0 0 0-.987-.767Z"
    />
  </svg>
);
export { SvgComponent as WorkApplicationIcon };