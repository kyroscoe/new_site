import { Navigation } from '../home/components/Navigation';
import { WebDesign } from '../home/components/WebDesign';
import { Footer } from '../home/components/Footer';

export default function WebDesignPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20">
        <WebDesign />
      </div>
      <Footer />
    </>
  );
}
