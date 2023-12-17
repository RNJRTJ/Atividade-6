import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import styles from '/styles/Destino.module.css';
import Link from "next/link";

const Destino = () => {
  const [newDestino, setNewDestino] = useState({id: "", dataviagem: "", contato_id: "", promocoe_id: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewDestino({ ...newDestino, [e.target.name]: e.target.value });
  };

  const handelAddDestino = () => {
    axios
      .post("http://localhost:8080/destinos", newDestino)
      .then((response) => {
        router.push("/destino/editarDestino");
      })
      .catch((error) => {
        alert("Erro ao inserir o Destino:" + error);
      });
  };

  return ( 
    <>
    <main className={styles.main}>
    <h1  class="bg-white text-black mb-4">Destinos Mais Procurados</h1>
    <div className="row mx-auto mb-5 d-flex justify-content-evenly">

      <div className={styles.card}>
        <img src="/img/lisboa.jpeg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Lisboa</h1>
      </div>

      <div className={styles.card}>
        <img src="/img/miami.jpeg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Miami</h1>
      </div>

      <div className={styles.card}>
        <img src="/img/portoA.jpeg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Porto</h1>
      </div>

      <div className={styles.card}>
        <img src="/img/madrid.jpg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Madrid</h1>
      </div>
      
      <div className={styles.card}>
        <img src="/img/barcelona.jpeg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Barcelona</h1>           
      </div>

      <div className={styles.card}>
        <img src="/img/disney.webp" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Disney</h1>
      </div>

    </div>
    <div id="sectionDestinos" className="container">
      <h1 className="text-black bg-white">Horário da Viagem</h1>
      <form action="Inserir" method="post" className="form-control tabela">
        <fieldset>
          <legend>Data da Viagem</legend>
          <p hidden>
              <input className="form-control" type="date" name="dataviagem" value={newDestino.id} onChange={handleInputChange}/>
          </p>
          <p>
              <input className="form-control" type="date" name="dataviagem" value={newDestino.dataviagem} onChange={handleInputChange}/>
          </p>
          <p hidden>
              <input className="form-control" type="number" name="contato_id" value={newDestino.contato_id} onChange={handleInputChange}/>
          </p>
          <p hidden>
              <input className="form-control" type="number" name="promocoe_id" value={newDestino.promocoe_id} onChange={handleInputChange}/>
          </p>
          <p>
            <Link href={"/destino/editarDestino"} className="btn btn-primary"  onClick={handelAddDestino}>Inserir Destino</Link>
          </p>
        </fieldset>
      </form>
    </div>
  </main>
  </>
  );
};

export default Destino;
