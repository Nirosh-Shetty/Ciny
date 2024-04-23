import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <h1 className="">
      <HeroSection />
      <FeaturedCourse />
    </h1>
  );
}
