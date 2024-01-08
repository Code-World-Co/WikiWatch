//importando los componentes de navegacion
import { AboutMe } from "./components/AboutMe";
import { SkillsSection } from "./sections/SkillsSection";
import { Prcontenedor } from "./sections/PrContenedor";
import { Contacts } from "./sections/Contactos";
import { Header} from "./components/Header";
import {  Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer"; 
import "./style/style.css";
import { Up } from "./components/Up";


function App() {



  return (
    <>
      
      <Header/>

      <section >
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/habilidades" element={<SkillsSection />} />
          <Route path="/proyectos" element={<Prcontenedor />} />
          <Route path="/contactos" element={<Contacts />} />
        </Routes>
       
      </section>

      <Footer/>
     
      <Up/>
    </>
  );
}

export default App;
