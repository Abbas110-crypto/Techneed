import Hero from "./components/Hero/Hero";
import Container from "./components/Container/Container";
import CaseStudies from "./components/Case Studies/CaseStudies";
import Testimonials from './components/Testimonials/Testimonials';
import Advisory from './components/Advisory/Advisory';


export default function Home() {
  return (
   <div>
    <Hero />
    <Testimonials />
     <Container /> 
    <CaseStudies />
    <Advisory />  
   </div>
  );
}
