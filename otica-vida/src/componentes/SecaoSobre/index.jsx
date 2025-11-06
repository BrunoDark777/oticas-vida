import estilos from './SecaoSobre.module.css'
import Loja from '../../../public/loja.png'
import Atendimento from '../../../public/atendimento.png'
import Image from "next/image"

export default function SecaoSobre(){
    return(
        <section className={estilos.container_sobre}>
            <h3>QUEM SOMOS NÓS</h3>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais</p>
            <p>baixa sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

            <div className={estilos.container_divs}>
                <div>
                    <Image src={Loja} alt='Loja' className={estilos.imagens} />
                    <h4>NOSSAS FILIAIS</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div>
                    <h4>ATEMDIMENTO FLEXÍVEL</h4>
                    <p>Nossa equipe é treinada para te atender</p>
                    <Image src={Atendimento} alt='Atendimento' className={estilos.imagens} />
                </div>
            </div>
        </section>
    )
}