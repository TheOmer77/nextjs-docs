import type { CSSProperties } from 'react';

import { useDoc } from '../doc-provider';

export const Toc = () => {
  const doc = useDoc();
  if (!doc || doc.headings.length < 0) return null;

  const lowestLevel = Math.min(
    ...(doc?.headings.map(({ level }) => level).filter(Boolean) as number[])
  );

  return (
    <div className='sticky top-24 hidden self-start pe-8 ps-4 text-sm xl:block print:hidden'>
      <h3 className='mb-2 font-bold'>On this page</h3>
      <ul
        className='space-y-2'
        style={{ '--lowest-level': lowestLevel } as CSSProperties}
      >
        {doc?.headings.map(({ level, slug, text }) => (
          <li
            key={slug}
            className='ps-[calc(theme(spacing.4)*(var(--level,1)-var(--lowest-level,1)))]'
            style={{ '--level': level } as CSSProperties}
          >
            <a
              href={`#${slug}`}
              className='text-muted-foreground transition-[color] hover:text-foreground'
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
