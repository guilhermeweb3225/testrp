import "./Home.css";
import Menu from "../Components/Menu.jsx";
import arrowR from "../assets/arrow-r.svg";
import imgU from "../assets/200r.png";
import imgD from "../assets/f-200r.png";
import imgGrafico from '../assets/imgsFundo/grafico-2.png'
import NotL from "../assets/imgsFundo/dispositivosE-1.png";
function Home() {
  return (
    <>
      <Menu />
      <section className="headline animaçao-intro">
        <h1>PixelForge</h1>
      </section>
      <section className="headline box-1">
        <div className="headline texto-l">
          <h2>
            Desenvolvemos soluções digitais que entregam resultados concretos.
          </h2>
          <button>
            Vamos! <img src={arrowR} />
          </button>
        </div>
        <div className="headline cedula">
          <img src={imgU} id="img1" />
          <img src={imgD} id="img2" />
        </div>
      </section>
      <section className="box-2">
        <div className="text2">
          <h2>Sobre a PixelForge</h2>
          <p>
            Na PixelForge, transformamos ideias em experiências digitais de alto
            impacto. Nossa equipe é formada por designers criativos,
            desenvolvedores web e especialistas em marketing, todos
            comprometidos em criar soluções inovadoras que geram resultados
            reais.
          </p>
        </div>
        <div className="imagen-l-not">
          <img src={NotL} />
        </div>
      </section>
      <section className="box-3">
        <div className="text-3">
            <h2>
              Oferecemos serviços completos para fortalecer sua presença online e
              visual, incluindo:
            </h2>
            <table>
              <ul>
                <li>
                  <strong>Criação de Sites e Landing Pages</strong> – Totalmente
                  responsivos, rápidos e otimizados para conversão.
                </li>
                <li>
                  <strong>Edição de Vídeos e Imagens</strong> – Produção
                  profissional para mídias sociais, publicidade e branding.
                </li>
                <li>
                  <strong>Criação de Logotipos</strong> – Identidade visual única
                  para fortalecer sua marca.
                </li>
                <li>
                  <strong>Design Gráfico</strong> – Artes para redes sociais,
                  banners, cartões de visita e materiais promocionais.
                </li>
              </ul>
            </table>
        </div>
        <div className="img2-grafico">
            <img src={imgGrafico} />
        </div>
      </section>
      <section className="box-4">
        <div className="text-4">
            <h2>Quais os passos para o Desenvolvimento de Site?</h2>
            <p><strong>Descoberta & Estratégia</strong> – Entendemos seu negócio, objetivos e público-alvo para criar um site que realmente funcione para você.</p>
            <p><strong>Pesquisa & Referências </strong>– Analisamos concorrentes, tendências e conceitos visuais que melhor se encaixam no seu projeto.</p>
            <p><strong>Wireframe & UX/UI Design</strong> – Estruturamos a navegação e criamos um design visual moderno e intuitivo, garantindo uma ótima experiência ao usuário.</p>
            <p><strong>Desenvolvimento Web</strong> – Transformamos o design em um site rápido, responsivo e otimizado, utilizando as melhores tecnologias.</p>
            <p><strong>Testes & Qualidade</strong> – Garantimos que o site funcione perfeitamente em diferentes dispositivos e navegadores.</p>
            <p><strong>Lançamento & Suporte</strong> – Publicamos seu site e oferecemos suporte contínuo para atualizações, melhorias e desempenho.</p>
        </div>
      </section>
    </>
  );
}
export default Home;
