import type { ReactNode } from 'react';

import Sidebar from 'components/Sidebar';

import styles from './styles.module.scss';
import 'styles/reset.css';
import 'styles/globals.css';
import 'styles/prism.css';

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default DocsLayout;
