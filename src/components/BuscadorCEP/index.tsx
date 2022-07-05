import { useEffect, useState } from 'react';
import './style.css';

type cepType = {
    cep: any,
    logradouro?: string,
    bairro?: string,
    localidade?: string,
    uf?: string,
    ddd?: string,
}

export default function BuscadorCEP(cep: any) {
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