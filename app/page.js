import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CtaSection from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CtaSection />
    </>
  );
}
