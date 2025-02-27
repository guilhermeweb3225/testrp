import './Contato.css'
import Menu from '../Components/Menu.jsx'
import imgU from '../assets/imgsFundo/insta-icon.png'
import imgD from '../assets/imgsFundo/tik-icon.png'
import imgT from '../assets/imgsFundo/face-icon.png'
import imgQ from '../assets/imgsFundo/whats-icon.png'
function Contato(){
    return (
        <>
        <Menu/>
        <section className="contatos-box">
            <div className="texto">
                <h1>Entre em Contato</h1>
                <p>Se você tem alguma dúvida ou quer saber mais sobre nossos serviços,
                entre em contato conosco pelas redes sociais abaixo ou pelo WhatsApp!</p>
            </div>
            <div className="redes">
                <a href="https://www.instagram.com/pixelforgeoficial/"target='_blank'><img src={imgU}/></a>
                <a href="https://www.tiktok.com/@pixelforge377?is_from_webapp=1&sender_device=pc"target='_blank'><img src={imgD}/></a>
                <a href="https://www.facebook.com/profile.php?id=61573734592714"target='_blank'><img src={imgT}/></a>
                <a href="https://wa.me/qr/RR43FBXUMCWBD1"target='_blank'><img src={imgQ}/></a>
            </div>
        </section>
        </>
    )
}
export default Contato