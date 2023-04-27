import SidebarItem from './SidebarItem';
import type { NavItem } from './types';
import styles from './index.module.scss';

const Sidebar = ({ items }: { items: NavItem[] }) => (
  <nav className={styles.container}>
    <ul className={styles.list}>
      {items.map(item => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </ul>
  </nav>
);

export default Sidebar;
