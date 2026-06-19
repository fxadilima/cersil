declare module '*.mdx' {
  import { ComponentType } from 'preact';
  const Component: ComponentType<any>;
  export default Component;
}

declare module '*.md' {
  import { ComponentType } from 'preact';
  const Component: ComponentType<any>;
  export default Component;
}
