import "bootstrap/dist/css/bootstrap.css";
import styles from '/styles/Destino.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'; // Importe o Link para criar links de navegação

 
const Home = () => {
  const [newContato, setNewContato] = useState([]);
 
  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("http://localhost:8080/contatos", newContato)
      .then((response) => {
        setNewContato(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de contatos:", error);
      });
  }, []);
 
  return (
    <>
    <main className={styles.main}>
    <h1  class="bg-white text-black mb-4">Viagem pelo Mundo!</h1>
    <div className="row mx-auto mb-5 d-flex justify-content-evenly">

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
        <img src="/img/fortaleza.jpg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Fortaleza</h1>           
      </div>

      <div className={styles.card}>
        <img src="/img/Salvador.jpeg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Salvador</h1>
      </div>

      <div className={styles.card}>
        <img src="/img/madrid.jpg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Madrid</h1>
      </div>

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
        <img src="/img/fortaleza.jpg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Fortaleza</h1>           
      </div>

      <div className={styles.card}>
        <img src="/img/Salvador.jpeg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Salvador</h1>
      </div>

      <div className={styles.card}>
        <img src="/img/madrid.jpg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Madrid</h1>
      </div>

      <div className={styles.card}>
        <img src="/img/australia.jpeg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Australia</h1>
      </div>

      <div className={styles.card}>
        <img src="/img/canada.jpeg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Canada</h1>
      </div>

      <div className={styles.card}>
        <img src="/img/novaYork.jpeg" width={'100%'} height={'100%'} alt="..."/>
        <h1 className="card-title">Nova York</h1>
      </div> 
    </div>
  </main>
  </>
  );
};
 
export default Home;