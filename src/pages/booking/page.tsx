import { Navigation } from '../home/components/Navigation';
import { Booking } from '../home/components/Booking';
import { Footer } from '../home/components/Footer';

export default function BookingPage() {
  return (
    <>
      <Navigation />
      <div className="pt-20">
        <Booking />
      </div>
      <Footer />
    </>
  );
}
