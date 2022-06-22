import './Cabecalhofeed.css';
import './cabecalho2' ;

const Cabecalho = function() {
    return (
      <header className="cabecalhofeed">
        <a  className='logotipo' href=""><img src="" alt="" /></a>
        <nav className='menu'>
          <a className='menu-item1' href="">Publicações</a>
          <a className='menu-item2' href="">Notificações</a>
          <a className='menu-item3' href="">Chat</a>
        </nav>
      </header>
  
    )
  }
  
  export default Cabecalho;