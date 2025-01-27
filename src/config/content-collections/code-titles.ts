// Modified version of rehype-code-titles
// https://github.com/rockchalkwushock/rehype-code-titles/blob/production/src/index.ts

import type { Element, Root } from 'hast';
import { type BuildVisitor, visit, type VisitorResult } from 'unist-util-visit';

const customClassName =
  'rounded-t-lg border-b bg-[--tw-prose-pre-bg] p-2 font-mono text-sm text-muted-foreground [&+pre]:mt-0 [&+pre]:rounded-t-none';

export const rehypeCodeTitles = () => (tree: Root) => {
  const titlesToInsert: { index: number; title: string }[] = [];

  const visitor: BuildVisitor<Root, 'element'> = (
    node,
    index,
    parent
  ): VisitorResult => {
    if (!parent || typeof index !== 'number' || node.tagName !== 'pre') return;

    const code = Array.isArray(node.children)
      ? node.children[0]
      : node.children;
    if (
      !(code?.data && 'meta' in code.data && typeof code.data.meta === 'string')
    )
      return;

    const title = code.data.meta.match(/title="([^"]+)"/)?.[1];
    if (title) titlesToInsert.push({ index, title });

    const className =
      ((code as Element)?.properties?.className as Array<string>) ??
      ([] as Array<string>);

    node.children = [
      // @ts-expect-error Spreading code so it should already have its properties
      { ...code, properties: { className } },
    ];
  };

  // First visit the tree to collect titles, then insert them into the tree
  visit(tree, 'element', visitor);
  titlesToInsert.forEach(({ index, title }) => {
    const titleNode = {
      children: [{ type: 'text', value: title }],
      properties: { className: [customClassName] },
      tagName: 'div',
      type: 'element',
    };
    (tree.children as Array<unknown>).splice(index, 0, titleNode);
  });
};
