declare module '*.svg?react' {
  import type { FunctionComponent, ComponentProps } from 'react';

  const ReactComponent: FunctionComponent<
    ComponentProps<'svg'> & { title?: string }
  >;

  export default ReactComponent;
}
