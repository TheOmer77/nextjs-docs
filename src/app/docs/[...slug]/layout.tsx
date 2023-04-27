import type { ReactNode } from 'react';

import Sidebar from 'components/Sidebar';

import styles from './styles.module.scss';

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default DocsLayout;
