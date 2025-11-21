import { Navigation } from '../home/components/Navigation';
import { Contact } from '../home/components/Contact';
import { Footer } from '../home/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
