import './Cabecalho.css'

const Cabecalho = function() {
    return (
      <header className="cabecalho">
        <a  className='logotipo' href=""><img src="" alt="" /></a>
        <nav className='menu'>
          <a className='menu-item' href="">Publicações</a>
          <a className='menu-item' href="">Notificações</a>
          <a className='menu-item' href="">Chat</a>
        </nav>
      </header>
  
    );
  }
  
  export default Cabecalho;