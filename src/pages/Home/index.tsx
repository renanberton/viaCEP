import './style.css';
import { useEffect, useState } from 'react';
import { BuscadorCEP } from '../../components/BuscadorCEP/index'

type cepType = {
    cep: any,
    logradouro?: string,
    bairro?: string,
    localidade?: string,
    uf?: string,
    ddd?: string,
}

export function Home() {

    const [CEPP, setCEPP] = useState('');
    let input = document.getElementById('cepValue') as HTMLInputElement;
    let btn = document.querySelector('.btn');

    function handleOnChange() {
        btn?.addEventListener('click', () => {
            setCEPP(input.value.toString())
            return true;
        })
    }
    handleOnChange()

    const [isActive, setActive] = useState(false);

    return (
        <div>
            <div>
                <h1>Testando API CEP</h1>
                <span>Digite seu CEP</span>
                <input type="text" placeholder='CEP' id='cepValue' />
                {/* Aqui temos um operator ternário, caso não esteja ativo, ele ativa, caso esteja ativo, ele desativa */}
                <button className='btn' onClick={() => isActive ? setActive(false) : setActive(true)}>Consultar CEP</button>
                {isActive && <BuscadorCEP cep={CEPP} />}
            </div>
        </div>
    )
}