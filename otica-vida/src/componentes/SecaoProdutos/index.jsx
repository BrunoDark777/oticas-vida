import estilos from './SecaoProdutos.module.css';
import Oculos_1 from '../../../public/oculos01.png';
import Oculos_2 from '../../../public/oculos02.png';
import Oculos_3 from '../../../public/oculos03.png';
import Oculos_4 from '../../../public/oculos04.png';
import Image from 'next/image';

export default function SecaoProdutos(){
    return(
        <section>

            <h3>NOSSOS PRODUTOS</h3>
            <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
            <p>Todos os nosso preços são acessiveis e contam com a melhor qualidade do mercado.</p>

            <div>
                <h4>Óculos de grau</h4>
                <Image src={Oculos_1} alt='Óculos de grau ' />
                <p>R$ 500,00</p>
            </div>
            <div>
                <h4>Óculos transition</h4>
                <Image src={Oculos_2} alt='Óculos trasition' />
                <p>R$ 750,00</p>
            </div>
            <div>
                <h4>Óculos de sol</h4>
                <Image src={Oculos_3} alt='Óculos de sol' />
                <p>R$ 700,00</p>
            </div>
            <div>
                <h4>Óculos infantil</h4>
                <Image src={Oculos_4} alt='Óculos infantil' />
                <p>R$ 500,00</p>
            </div>

            <h3>Todos os nossos produtos incluem:</h3>
            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>
        </section>
    )
}