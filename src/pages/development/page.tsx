import { Navigation } from '../home/components/Navigation';
import { Development } from '../home/components/Development';
import { Footer } from '../home/components/Footer';

export default function DevelopmentPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20">
        <Development />
      </div>
      <Footer />
    </>
  );
}
