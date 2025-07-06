
import Hero from "@/app/components/hero";
import ExperienceNumber from "@/app/components/experience_number";
import How_IHelp from "./components/how_i_help";
import AboutUs from "./components/aboutus";
import Testimonials from "./components/testimonials";
import Ellie_books from "./components/ellie_books";
import Latest_Bloggs from "./components/latest_blogs";
import Asked_Questions from "./components/asked_questions";
import Candel from "./components/candel";
import GetInTouch from "./components/get_in_touch";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceNumber />
      <How_IHelp />
      <AboutUs />
      <Testimonials />
      <Ellie_books />
      <Latest_Bloggs />
      <Asked_Questions />
      <Candel />
      <GetInTouch />
      <Footer />
    </>
  );
}
