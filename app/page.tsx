import { Navbar } from '@/components/Navbar';
import { HeroSearch } from '@/components/HeroSearch';
import { PropertiesSection } from '@/components/PropertiesSection';
import { CompanySection } from '@/components/CompanySection';
import { ContactFooter } from '@/components/ContactFooter';

export default function Home() {
  return (
    <main className="w-full flex justify-center flex-col items-center overflow-x-hidden">
      <Navbar />
      <HeroSearch />
      <PropertiesSection />
      <CompanySection />
      <ContactFooter />
    </main>
  );
}
