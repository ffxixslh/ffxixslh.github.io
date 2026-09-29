/**
 * Imports the SVG file as a React component.
 * @requires [@rsbuild/plugin-svgr](https://npmjs.com/package/@rsbuild/plugin-svgr)
 */
declare module '*.svg?react' {
  import type { FunctionComponent, SVGProps } from 'react';
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.md' {
  let MDXComponent: () => JSX.Element;
  export default MDXComponent;
}

declare module '*.mdx' {
  import type { ComponentType } from 'react';

  export const frontmatter: {
    title?: string;
    date?: string;
    author?: string;
    description?: string;
    tags?: string[];
  };

  const MDXComponent: ComponentType;
  export default MDXComponent;
}