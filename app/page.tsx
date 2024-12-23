import BannerCTA from "@/components/BannerCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectsCTA from "@/components/ProjectsCTA";
import ServiceSecond from "@/components/ServiceSecond";


export default function Home() {
  return (
    <div className="page-wrapper mx-auto">
      <div className="opacity: 1; transform: none;">
        <main className="overflow-clip">
          <Hero />
          <BannerCTA />
          <ServiceSecond />
          <BannerCTA />
          <ProjectsCTA />
          <Footer />
        </main>
      </div>
    </div>
  );
}
