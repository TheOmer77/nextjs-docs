import { allDocs } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

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
  if (!doc)
    return (
      <div>
        <h1>404</h1>
        <p>{params.slug} not found :(</p>
      </div>
    );

  const MdxContent = getMDXComponent(doc.body.code);

  return (
    <div>
      <h1>{doc.title}</h1>
      <MdxContent />
    </div>
  );
};

export default DocLayout;
