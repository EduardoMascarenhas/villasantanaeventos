//import HeroSliderThree from "@/components/HeroSliderThree";
import NavBar from "@/components/NavBar";
import VideoCta from "@/components/VideoCta";
import ProjectSliderTwo from "@/components/ProjectSliderTwo";
import TestimonialSlider from "@/components/TestimonialSlider";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import HeroSliderThree from "@/components/HeroSliderThree";

export default function Home() {
  return (
    <div>
        {/* Navigation bar */}
        <NavBar />

        {/* Hero slider */}
        <HeroSliderThree />

        {/* Video CTA */}
        <VideoCta />

        {/* Project Slider */}
        <ProjectSliderTwo />

        {/* Testimonial Slider */}
        <TestimonialSlider />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
  );
}
