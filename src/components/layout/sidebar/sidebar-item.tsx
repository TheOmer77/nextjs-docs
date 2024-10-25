import { usePathname } from 'next/navigation';
import { ChevronRightIcon } from 'lucide-react';

import { Collapsible } from '@/components/ui/collapsible';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@/components/ui/list';
import { cn } from '@/lib/cn';
import type { source } from '@/lib/source';

import { SidebarLink } from './sidebar-link';

type PageTreeNode = (typeof source.pageTree)['children'][number];

type SidebarItemProps = {
  node: PageTreeNode;
  active?: boolean;
  childActive?: boolean;
};

export const SidebarItem = ({ node }: SidebarItemProps) => {
  const pathname = usePathname();

  if (node.type === 'separator')
    return <ListSubheader>{node.name}</ListSubheader>;

  const url = node.type === 'folder' ? node.index?.url : node.url,
    external = node.type === 'page' && node.external;

  const isActive = url === pathname,
    isChildActive =
      node.type === 'folder' &&
      node.children.some(child => {
        if (child.type === 'separator') return false;
        const childUrl = child.type === 'folder' ? child.index?.url : child.url;
        return child.type === 'page' && childUrl === pathname;
      });

  const hasChildren = node.type === 'folder' && node.children.length > 0;
  const firstChildUrl =
    (hasChildren && node.children[0].type === 'page' && node.children[0].url) ||
    undefined;

  return (
    <>
      <ListItem asChild aria-current={isActive ? 'page' : undefined}>
        <SidebarLink
          href={url || firstChildUrl}
          target={external ? '_blank' : ''}
          rel={external ? 'noreferrer' : ''}
        >
          <ListItemText primary={node.name} />
          {hasChildren && (
            <ListItemIcon
              className={cn(
                'transition-transform duration-300',
                (isActive || isChildActive) && 'rotate-90'
              )}
            >
              <ChevronRightIcon />
            </ListItemIcon>
          )}
        </SidebarLink>
      </ListItem>
      {hasChildren && (
        <Collapsible
          open={isActive || isChildActive}
          className='flex w-full flex-col gap-px ps-4'
        >
          {node.children.map((child, idx) => (
            <SidebarItem key={`${node.index}-child${idx}`} node={child} />
          ))}
        </Collapsible>
      )}
    </>
  );
};
