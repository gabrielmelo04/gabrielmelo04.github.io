import { CornerRightUp, } from "lucide-react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Menu } from "./components/Menu";


export default function App() {

  return (
    <div className="w-full px-8 md:px-16 pt-5 ">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <Menu />
      <a href="#header"><CornerRightUp className="w-8 h-8 fixed bottom-4  right-1 md:right-2 text-purple-700 animate-bounce cursor-pointer" /></a>
    </div>
  )
}
