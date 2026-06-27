import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <main className='space-y-20 py-16 sm:space-y-28 sm:py-24 lg:space-y-32'>
        <LatestCollection />
        <BestSeller />
        <OurPolicy />
        <div className='az-home-newsletter'>
          <NewsletterBox />
        </div>
      </main>
    </div>
  );
};

export default Home;
