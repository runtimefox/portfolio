import { AboutMe } from '@/components/main/AboutMe';
import { Contacts } from '@/components/main/Contacts';
import { Hero } from '@/components/main/Hero';
import { Portfolio } from '@/components/main/Portfolio';
import { Skills } from '@/components/main/Skills';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contacts />
      </main>
    </>
  );
}
