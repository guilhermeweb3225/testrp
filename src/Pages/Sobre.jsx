import "./Sobre.css";
import Menu from "../Components/Menu.jsx";
function Sobre() {
  return (
    <>
      <Menu />
      <section id="sobre-nos" className="sobre-nos">
        <div className="container">
          <h2>Sobre Nós</h2>
          <p>
            Na <strong>PixelForge</strong>, somos uma equipe apaixonada
            por ajudar empresas a alcançarem seu máximo potencial através de
            soluções criativas e personalizadas. Com um foco em design inovador,
            edição de alta qualidade e estratégias visuais impactantes, nosso
            objetivo é transformar suas ideias em resultados concretos.
          </p>
          <p>
            Com uma abordagem centrada nas necessidades de cada cliente,
            trabalhamos para criar experiências visuais únicas, que não só
            atendem às expectativas, mas superam-nas. Seja na criação de uma
            identidade visual forte, no aprimoramento de conteúdos digitais ou
            no desenvolvimento de templates exclusivos, estamos aqui para
            impulsionar o crescimento do seu negócio.
          </p>
          <p>
            Nosso compromisso é entregar qualidade, inovação e um serviço
            personalizado que faça a diferença no seu mercado. Vamos criar algo
            incrível juntos!
          </p>
        </div>
      </section>
    </>
  );
}
export default Sobre;
