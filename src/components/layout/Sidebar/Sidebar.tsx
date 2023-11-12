import { allDocs } from 'contentlayer/generated';

import { List } from 'components/general/List';
import SidebarItem from './SidebarItem';

export const Sidebar = () => (
  <>
    <aside
      className='fixed flex h-screen w-80 select-none flex-col bg-neutral-50
pt-16 after:absolute after:end-0 after:top-0 after:-z-10 after:h-inherit
after:w-screen after:bg-inherit dark:bg-neutral-900'
    >
      <List>
        {allDocs
          .filter(doc => doc._raw.flattenedPath.split('/').length < 2)
          .map(doc => (
            <SidebarItem key={doc._id} doc={doc} />
          ))}
      </List>
    </aside>
    <div className='w-80' />
  </>
);
