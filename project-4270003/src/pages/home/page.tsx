
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ClientPortal } from './components/ClientPortal';
import { Footer } from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <ClientPortal />
      <Footer />
    </>
  );
}
