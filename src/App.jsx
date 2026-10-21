import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuShowcase from './components/MenuShowcase';
import DiscoverMenu from './components/DiscoverMenu';
import ReserveTable from './components/ReserveTable';
import FeaturedDishes from './components/FeaturedDishes';
import Testimonials from './components/Testimonials';
import Experts from './components/Experts';
import AppPromo from './components/AppPromo';
import RecentNews from './components/RecentNews';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuShowcase />
        <DiscoverMenu />
        <ReserveTable />
        <FeaturedDishes />
        <Testimonials />
        <Experts />
        <AppPromo />
        <RecentNews />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
