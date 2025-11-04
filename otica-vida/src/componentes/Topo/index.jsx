import estilos from './Topo.module.css';
import Logo from '../../../public/logo.png';
import Image from "next/image";
import Link from 'next/link';

export default function Topo(){
    return(
        <header className={estilos.topo}>
            <Image src={Logo} alt='Logo' title='Óticas Vida' className={estilos.img_topo} />
            <nav>
                <Link href='#produtos' className={estilos.menu}><p>PRODUTOS</p></Link>
                <Link href='#sobre' className={estilos.menu}><p>SOBRE</p></Link>
                <Link href='#contato' className={estilos.menu}><p>CONTATO</p></Link>
            </nav>
        </header>
    )
}