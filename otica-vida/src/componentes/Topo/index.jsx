import estilos from './Topo.module.css';
import Logo from '../../../public/logo.png';
import Image from "next/image";
import Link from 'next/link';

export default function Topo (){
    return(
        <header>
            <Image src={Logo} alt='Logo' title='Óticas Vida'/>
            <nav>
                <Link>PRODUTOS</Link>
                <Link>SOBRE</Link>
                <Link>CONTATO</Link>
            </nav>
        </header>
    )
}