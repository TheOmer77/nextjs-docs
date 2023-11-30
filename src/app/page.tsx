import { config } from 'contentlayer/generated';
import { HomeLayout } from 'layouts';

const HomePage = () => <HomeLayout {...config.homePage} />;

export default HomePage;
