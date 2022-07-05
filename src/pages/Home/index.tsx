import './style.css';
import { useEffect, useState } from 'react';

type cepType = {
    cep: any,
    logradouro?: string,
    bairro?: string,
    localidade?: string,
    uf?: string,
    ddd?: string,
}

function BuscadorCEP(cep: any) {
    const [valorCEP, setCEP] = useState<cepType>();


    useEffect(() => {
        function LoadCEP() {
            fetch('https://viacep.com.br/ws/09895770/json/')
                .then(response => response.json())
                .then(data => setCEP(data))

        }
        LoadCEP()
        /* Aqui chamamos a função que faz os fetchs, etc e depois retorna o HTML abaixo \/ */

    }, [])

    return (
        <div>
            <div>
                <p>
                    {valorCEP?.logradouro}
                </p>
                <p>
                    {valorCEP?.bairro}
                </p>
                <p>
                    {valorCEP?.localidade}
                </p>
                <p>
                    {valorCEP?.cep}
                </p>
                <p>
                    {valorCEP?.uf}
                </p>
                {valorCEP?.ddd}
            </div>
        </div>
    )
}

export function Home() {

    const [CEPP, setCEPP] = useState('');

    function handleOnChange(e: any) {
        setCEPP(e.target.value);
    }

    const [isActive, setActive] = useState(false);
    const [CEP, set] = useState('')

    return (
        <div>
            <div>
                <h1>Testando API CEP</h1>
                <span>Digite seu CEP</span>
                <input type="text" placeholder='CEP' className='cepValue' onChange={handleOnChange} />
                <button className='btn' onClick={() => setActive(true)}>Consultar CEP</button>
                {isActive && <BuscadorCEP />}
            </div>
        </div>
    )
}