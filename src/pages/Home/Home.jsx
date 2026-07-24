import Hero from "../../sections/Hero/Hero";
import SignatureServices from "../../sections/SignatureServices/SignatureServices";
import FeaturedGallery from "../../sections/FeaturedGallery/FeaturedGallery";
import BookingCTA from "../../sections/BookingCTA/BookingCTA";
import Location from "../../sections/Location/Location";
import FAQ from "../../sections/FAQ/FAQ";
import OurPromise from "../../sections/OurPromise/OurPromise";

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureServices />
      <OurPromise />
      <FeaturedGallery />
      <BookingCTA />
      <Location />
      <FAQ />
    </>
  );
}
