
import './buscar.css'
import imagemLupa from '../imagens/lupa.svg'
import RodapeFeedGuardaRoupa from './RodapeFeedGuardaRoupa';

const Buscar = function(){
    return (
        <>
        <div className='search-box'>
            <input type="text" className='search-txt' placeholder="Pesquisar" />
            <a href="#" className='search-btn'>
                <img src={imagemLupa} alt="Lupa" height={35} width={35}/>
            </a>
        </div>
        <RodapeFeedGuardaRoupa/> 
        </>
    )
       
            
};
    export default Buscar;