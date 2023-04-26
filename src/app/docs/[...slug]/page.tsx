import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

import layoutStyles from './styles.module.scss';
import markupStyles from 'styles/markup.module.scss';

export const generateStaticParams = async () =>
  allDocs.map(doc => ({ slug: doc._raw.flattenedPath.split('/') }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const doc = allDocs.find(doc => doc._raw.flattenedPath === params.slug);
  return { title: doc?.title };
};

const DocLayout = ({ params }: { params: { slug: string[] } }) => {
  const doc = allDocs.find(
    doc => doc._raw.flattenedPath === params.slug.join('/')
  );
  if (!doc) return notFound();

  const MdxContent = getMDXComponent(doc.body.code);

  return (
    <div className={layoutStyles.container}>
      <div /> {/* TBD? */}
      <article className={layoutStyles.article}>
        <header className={layoutStyles.header}>
          <h1 className={layoutStyles.title}>{doc.title}</h1>
        </header>
        <div className={markupStyles.container}>
          <MdxContent />
        </div>
      </article>
    </div>
  );
};

export default DocLayout;
