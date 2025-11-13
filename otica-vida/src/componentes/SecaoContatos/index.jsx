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
        <section className={estilos.secao_contatos}>
            <h3>Fale conosco</h3>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
<div className={estilos.container_divs}>
    
                <div className={estilos.container}>
                    <h3>Nossos Contatos</h3>
                    <div className={estilos.container_imagens}>
                        <Image src={Local} alt='Local' className={estilos.imagens} />
                        <span>Nova Iguaçu, RJ</span>
                    </div>
    
                    <div className={estilos.container_imagens}>
                        <Image src={Tel} alt='(21)9999-9999' className={estilos.imagens} />
                        <span>(21) 9999-9999</span>
                    </div>
    
                    <div className={estilos.container_imagens}>
                        <Image src={Email} alt='contato@oticavida.com' className={estilos.imagens} />
                        <span>contato@oticavida.com</span>
                    </div>
                </div>
                <div className={estilos.container}>
                    <h3>Nossas Redes Sociais</h3>
                    <div className={estilos.container_imagens}>
                        <Image src={Fb} alt='/OticaVida' className={estilos.imagens} />
                        <span>/OticaVida</span>
                    </div>
    
                    <div className={estilos.container_imagens}>
                        <Image src={Ig} alt='@oticavidarj' className={estilos.imagens} />
                        <span>@oticavidarj</span>
                    </div>
    
                    <div className={estilos.container_imagens}>
                        <Image src={Tt} alt='@oticavidarj' className={estilos.imagens} />
                        <span>@oticavidarj</span>
                    </div>
                </div>
</div>
        </section>
    )
}