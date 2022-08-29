import { useEffect, useState } from 'react';
import './style.css';

type cepType = {
    cep?: any | '',
    logradouro?: any | '',
    bairro?: any | '',
    localidade?: any | '',
    uf?: any | '',
    ddd?: any | '',
}

export function BuscadorCEP(cep: any) {
    const [valorCEP, setCEP] = useState<cepType>();

    useEffect(() => {
        function LoadCEP() {
            fetch('https://viacep.com.br/ws/' + cep.cep + '/json/')
                .then(response => response.json())
                .then(data => setCEP(data))

        }
        LoadCEP()
        /* Aqui chamamos a função que faz os fetchs, etc e depois retorna o HTML abaixo \/ */
    }, [])

    return (
        <div className='container'>
            <div className='boxCEP'>
                <p>
                    Logradouro: {valorCEP?.logradouro}
                </p>
                <p>
                    Bairro: {valorCEP?.bairro}
                </p>
                <p>
                    Cidade: {valorCEP?.localidade}
                </p>
                <p>
                    CEP: {valorCEP?.cep}
                </p>
                <p>
                    Distrito: {valorCEP?.uf}
                </p>
                <p>
                    DDD :{valorCEP?.ddd}
                </p>
            </div>
        </div>
    )
}