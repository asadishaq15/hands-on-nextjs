import FeaturedCourses from "@/components/featuredCourses";
import Herosection from "@/components/herosection";
import WhyChooseUs from "@/components/whyChooseUs";


export default function Home() {
  return (
<main className="min-g-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]]">
<Herosection/>
<FeaturedCourses/>
<WhyChooseUs/>
</main>  );
}
