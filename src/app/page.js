import Footer from "@/components/Footer/Footer";
import Categories from "@/components/Home/Categories";
import CTABanner from "@/components/Home/CTABanner";
import FeaturedEvents from "@/components/Home/FeaturedEvents";
import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedEvents />
        <Categories />
        <WhyChooseUs />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}