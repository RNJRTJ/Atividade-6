import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
      <header className="header mw-100">    
        <nav className="navbar navbar-expand-lg mb-5 bg-dark mw-100">
            <div className="container-fluid">
                <a className="navbar-brand align-middle bg-dark " href="#">
                    <img src="/img/Together.png" width={100} height={75} className=" d-inline-block mw-100"/>
                </a>
                <button  
                    className="navbar-toggler bg-white " 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <Link className="text-decoration-none" href="/">Home</Link>
                  <Link className="text-decoration-none" href="/promocoe">Promoção</Link>
                  <Link className="text-decoration-none" href="/destino">Destino</Link>
                  <Link className="text-decoration-none" href="/contato">Contato</Link>
                </ul>
            </div>
            </div>
        </nav>
        
    </header>

    </>

  );
};

export default Navbar;
