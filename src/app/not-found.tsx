import { ErrorLayout } from 'layouts';
import { config } from 'constants/contentlayer';

const NotFoundPage = () => (
  <ErrorLayout code={404} text={config.notFoundText} />
);

export default NotFoundPage;
