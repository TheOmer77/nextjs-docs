import { allDocs } from 'contentlayer/generated';
import SidebarItem from './SidebarItem';
import styles from './index.module.scss';

const Sidebar = () => (
  <nav className={styles.container}>
    <ul className={styles.list}>
      {allDocs
        .filter(doc => doc._raw.flattenedPath.split('/').length < 2)
        .map(doc => (
          <SidebarItem key={doc._id} doc={doc} />
        ))}
    </ul>
  </nav>
);

export default Sidebar;
