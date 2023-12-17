import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const Promocoe = () => {
  const [newPromocoe, setNewPromocoe] = useState({ id: "", preco: "", viagem: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewPromocoe({ ...newPromocoe, [e.target.name]: e.target.value });
  };

  const handelAddPromocoe = () => {
    axios
      .post("http://localhost:8080/promocoes", newPromocoe)
      .then((response) => {
        router.push("/promocoe/editarPromocoe");
      })
      .catch((error) => {
        alert("Erro ao inserir promoções:" + error);
      });
  };
 
  return (
    <>
    
    <main className="container">
    <div className="row mx-auto mb-5 d-flex justify-content-evenly" >
        <h1 className="mb-4 bg-white">Destinos Principais</h1>
            <div className="text-black card mb-3">
                    <img src="img/madrid.jpg" className="img-fluid w-100 h-100 rounded" alt="..."/>
                  <div className="card-img-overlay">
                        <h1 className="card-title">Madrid</h1>
                        <h3 className="card-text">A partir de</h3>
                        <h1 className="card-title">R$ <strong>1.500,00</strong></h1>
                    <button className="text-black btn btn-outline" type="button">
                        <a className="bg-primary nav-link fs-5" href="#sectionPromocoes">Saiba Mais</a>
                    </button>
                </div>
            </div>
            <div className="text-black card mb-3" >
                <img src="img/fortaleza.jpg" className="img-fluid w-100 h-100 rounded" alt="..."/>
                <div className="card-img-overlay">
                    <h1 className="card-title">Fortaleza</h1>
                    <h3 className="card-text">A partir de</h3>
                    <h1 className="card-title">R$ <strong>600,00</strong></h1>
                    <button className="text-black btn btn-outline" type="button">
                      <a className="bg-primary nav-link fs-5" href="#">Saiba Mais</a>
                    </button>
                </div>
            </div>
            <div className="text-black card mb-3">
                    <img src="img/madrid.jpg" className="img-fluid w-100 h-100 rounded" alt="..."/>
                    <div className="card-img-overlay">
                        <h1 className="card-title">Madrid</h1>
                        <h3 className="card-text">A partir de</h3>
                        <h1 className="card-title">R$ <strong>1.500,00</strong></h1>
                    <button className="text-black btn btn-outline" type="button">
                        <a className="bg-primary nav-link fs-5" href="#sectionPromocoes">Saiba Mais</a>
                    </button>
                </div>
            </div>
            <div className="text-black card mb-3">
                <img src="img/Salvador.jpeg" className="img-fluid w-100 h-100 rounded" alt="..."/>
                <div className="card-img-overlay">
                    <h1 className="card-title">Salvador</h1>
                    <h3 className="card-text">A partir de</h3>
                    <h1 className="card-title">R$ <strong>700,00</strong></h1>
                  <button className="text-black btn btn-outline" type="button">
                    <a className="bg-primary nav-link fs-5" href="#sectionPromocoes">Saiba Mais</a>
                  </button>
                </div>
            </div>
              <div className="text-black card mb-3">
                  <img src="img/disney.webp" className="img-fluid w-100 h-100 rounded" alt="..."/>
                  <div className="card-img-overlay">
                      <h1 className="card-title">Disney</h1>
                      <h3 className="card-text">A partir de</h3>
                      <h1 className="card-title">R$ <strong>2.000,00</strong></h1>
                    <button className="text-black btn btn-outline" type="button">
                      <a className="bg-primary nav-link fs-5" href="#sectionPromocoes">Saiba Mais</a>
                    </button>
                  </div>
              </div>
    </div>
    <div id="sectionPromocoes" className="container mb-4">
        <h1 className="text-white">Promoções</h1>
            <form action="Inserir" method="post" className="form-control tabela">
                <fieldset className="row d-flex justify-content-center">
                <legend className="text-black">Pesquisar Promoção</legend>
                <p>
                  <label for="inputName" className="visually-hidden"></label> <input className="form-control" type="text" name="preco" value={newPromocoe.preco} onChange={handleInputChange} placeholder="Digite o Preço"/>
                </p>
                <p>
                    <label for="inputName" className="visually-hidden"></label> <input className="form-control"  type="text" name="viagem" value={newPromocoe.viagem} onChange={handleInputChange} placeholder="Digite o Destino"/>
                </p>
                <p>
                    <Link href={"/promocoe/editarPromocoe"} className="btn btn-primary mb-3" onClick={handelAddPromocoe}>Buscar</Link>
                </p>
                </fieldset>
            </form>
        </div>
    </main>
    </>
  );
};
 
export default Promocoe;