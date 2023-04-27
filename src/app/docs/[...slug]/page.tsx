import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

import Sidebar from 'components/Sidebar';
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

  const sidebarItems = allDocs
    .filter(doc => doc._raw.flattenedPath.split('/').length < 2)
    .map(doc => ({
      id: doc._raw.flattenedPath,
      label: doc.title,
      href: doc.url,
      ...(allDocs.some(childDoc =>
        childDoc._raw.flattenedPath.startsWith(`${doc._raw.flattenedPath}/`)
      )
        ? {
            items: allDocs
              .filter(childDoc =>
                childDoc._raw.flattenedPath.startsWith(
                  `${doc._raw.flattenedPath}/`
                )
              )
              .map(childDoc => ({
                id: childDoc._raw.flattenedPath,
                label: childDoc.title,
                href: childDoc.url,
              })),
          }
        : {}),
    }));

  const MdxContent = getMDXComponent(doc.body.code);

  return (
    <div className={layoutStyles.container}>
      <Sidebar items={sidebarItems} />
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
