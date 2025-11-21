import { Navigation } from '../home/components/Navigation';
import { Services } from '../home/components/Services';
import { Footer } from '../home/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </>
  );
}
