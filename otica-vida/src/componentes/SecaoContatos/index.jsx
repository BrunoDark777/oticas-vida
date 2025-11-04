import estilos from './SecaoContatos.module.css'
import Local from '../../../public/local.png'
import Tel from '../../../public/telefone.png'
import Email from '../../../public/email.png'
import Fb from '../../../public/fb.png'
import Ig from '../../../public/ig.png'
import Tt from '../../../public/tt.png'
import Image from "next/image"

export default function SecaoContatos(){
    return(
        <section>
            <h3>Fale conosco</h3>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>

            <div>
                <h3>Nossos Contatos</h3>
                <Image src={Local} alt='Local' />
                <span>Nova Iguaçu, RJ</span>
                
                <Image src={Tel} alt='(21)9999-9999' />
                <span>(21) 9999-9999</span>

                <Image src={Email} alt='contato@oticavida.com' />
                <span>contato@oticavida.com</span>
            </div>
            <div>
                <h3>Nossas Redes Sociais</h3>
                <Image src={Fb} alt='/OticaVida' />
                <span>/OticaVida</span>

                <Image src={Ig} alt='@oticavidarj' />
                <span>@oticavidarj</span>

                <Image src={Tt} alt='@oticavidarj' />
                <span>@oticavidarj</span>
            </div>
        </section>
    )
}