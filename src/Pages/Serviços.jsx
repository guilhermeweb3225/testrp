import "./Serviços.css";
import Menu from "../Components/Menu.jsx";
function Serviços() {
  return (
    <>
      <Menu />
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="services-list">
            <div className="service-item">
              <h3 className="service-title">Design Gráfico</h3>
              <p>
                Transformamos suas ideias em designs criativos e impactantes.
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-title">Desenvolvimento Web</h3>
              <p>
                Criamos websites modernos, responsivos e com excelente
                usabilidade.
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-title">Edição de Vídeos e Imagens:</h3>
              <p>
                Oferecemos serviços de edição de alta qualidade para vídeos e
                imagens.
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-title">
                Criação de Templates Personalizados
              </h3>
              <p>
                Desenvolvemos templates exclusivos para sua marca, garantindo
                que seus projetos tenham uma identidade visual única
              </p>
            </div>
            <div className="service-item">
              <h3 className="service-title">Design de Logos Personalizadas</h3>
              <p>
                {" "}
                Criamos logos impactantes e memoráveis, refletindo a essência do
                seu negócio .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Serviços;
