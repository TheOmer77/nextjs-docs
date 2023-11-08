import { allDocs } from 'contentlayer/generated';

import { List } from 'components/general/List';
import SidebarItem from './SidebarItem';
import { SidebarHeader } from './SidebarHeader';

/*
padding-inline-start: max(2rem,calc((100% - 76rem)) / 2))
width: calc((100% - 76rem)) / 2 + 18rem)

*/

export const Sidebar = () => (
  <>
    <aside
      className='fixed flex h-screen w-80 select-none flex-col bg-neutral-50
dark:bg-neutral-900'
    >
      <SidebarHeader />
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
