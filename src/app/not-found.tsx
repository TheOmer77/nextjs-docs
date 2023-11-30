import { ErrorLayout } from 'layouts';
import { config } from 'contentlayer/generated';

const NotFoundPage = () => (
  <ErrorLayout code={404} text={config.notFoundText} />
);

export default NotFoundPage;
