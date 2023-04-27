import { type Doc } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

import styles from './index.module.scss';

const Markup = ({ doc }: { doc: Doc }) => {
  const MdxContent = getMDXComponent(doc.body.code);
  return (
    <div className={styles.container}>
      <MdxContent />
    </div>
  );
};

export default Markup;
