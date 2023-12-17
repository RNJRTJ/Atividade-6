import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <>
    <footer className="container-fluid py-5 bg-dark navbar-fixed-bottom mw-100 d-flex align-items-center">   
    <a className="navbar-brand align-middle m-1 py-2 bg-dark ">
            <img className="d-inline-block" src="/img/Together.png" width={100} height={75}/>
    </a> 
    <div className="copyrightSiteFooter">
      <p className="text-center" dir="ltr">
        <a 
        className="text-decoration-none bg-dark text-white card-text d-inline-block"
        href="https://www.instagram.com/_robson_junior_tj/?next=%2F" 
        target="_blank" rel="noopener noreferrer"> ©Desenvolvido por Robson Junior</a>
      </p>
    </div>
    </footer>
    </>
  );
};

export default Footer;
