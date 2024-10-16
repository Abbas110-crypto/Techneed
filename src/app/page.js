import Hero from "./components/Hero/Hero";
import Container from "./components/Container/Container";
import CaseStudies from "./components/Case Studies/CaseStudies";
import Testimonials from './components/Testimonials/Testimonials';
import Advisory from './components/Advisory/Advisory';
import AnimatedBg from './components/AnimatedBg/AnimatedBg'
// import BespokeSection from './components/BeSpoke/BeSpokeSection'
export default function Home() {
  return (
   <div>
   <AnimatedBg/>
    <Hero />
    <Testimonials />
     <Container /> 
     {/* <BespokeSection/> */}
    <CaseStudies />
    <Advisory />  
   </div>
  );
}
