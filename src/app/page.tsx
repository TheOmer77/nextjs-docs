import Link from 'next/link';
import { allDocs } from 'contentlayer/generated';

const Home = () => {
  return (
    <div>
      <h1>App</h1>

      <ul>
        {allDocs.map(doc => (
          <li key={doc._id}>
            <Link href={doc.url}>{doc.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
