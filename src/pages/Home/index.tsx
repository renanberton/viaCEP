import './style.css';
import { BuscadorCEP } from '../../components/BuscadorCEP';

export function Home() {

    return (
        <div>
            <h1>Testando API CEP</h1>
            <BuscadorCEP />
        </div>
    )
}