declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGElement>
  >;
  export default ReactComponent;
}

declare module '*.png' {
  const value: string;
  export default value;
}
