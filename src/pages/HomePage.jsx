import { ArrowRight } from "lucide-react";
import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import DesignPhilosophy from "../components/home/DesignPhilosophy";
import CreativeProcess from "../components/home/CreativeProcess";
import Marquee from "../components/home/Marquee";
import CTA from "../components/home/CTA";
import HorizontalProjects from "../components/home/HorizontalProjects";
import Clients from "../components/home/Clients";
import TestimonialWall from "../components/home/TestimonialWall";

const HomePage = () => {
  return (
    <>

      <Hero />
      <FeaturedProjects />
      <DesignPhilosophy />
      <HorizontalProjects />
      <Clients />
      <CreativeProcess />
      <Marquee />
      <TestimonialWall />
      <CTA />

    </>
  );
};

export default HomePage;