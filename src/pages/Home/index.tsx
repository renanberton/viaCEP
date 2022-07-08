import './style.css';
import { useState } from 'react';
import { BuscadorCEP } from '../../components/BuscadorCEP/index'

export function Home() {
    let input = document.getElementById('cepValue') as HTMLInputElement;
    const [isActive, setActive] = useState(false);

    return (
        <div className='containerHome'>
            <h1>Testando API CEP</h1>
            <div className='boxCepHome'>
                <span>Digite seu CEP</span>
                <input type="text" placeholder='CEP' id='cepValue' required />
                {/* Aqui temos um operator ternário, caso não esteja ativo, ele ativa, caso esteja ativo, ele desativa */}
                <button className='btn' onClick={() => isActive ? setActive(false) : setActive(true)}>Consultar CEP</button>
                {isActive && <BuscadorCEP cep={input.value} />}
            </div>
        </div>
    )
}