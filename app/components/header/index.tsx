import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Image from 'next/image';
import logo from '../../assets/app-logo.png';

import './styles.scss';

export function Header(){
    const dataFormatada = format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    return(
        <header className='headerContainer'>
            <Image width={150} height={36} src={logo} alt="logo" />
            <h1>Bem-vindo de volta, Marcus</h1>
            <span>{dataFormatada}</span>
        </header> 
    );
}