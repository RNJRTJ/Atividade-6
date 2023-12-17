import "bootstrap/dist/css/bootstrap.css";
import styles from '/styles/Destino.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'; // Importe o Link para criar links de navegação

 
const editarDestino = () => {
  const [newDestino, setNewDestino] = useState([]);
 
  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("http://localhost:8080/destinos", newDestino)
      .then((response) => {
        setNewDestino(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Destinos:", error);
      });
  }, []);
 
  return (
    <>
    <main className={styles.main}>
            {/* Lista Destino */}
            <div>
      <h1 style={{color:'white'}}>Lista de Promoção</h1>
      <p>
        <Link href="/destino#sectionDestinos" className="btn btn-primary mb-3">
          Veja os Destinos!
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th hidden>Id</th>
            <th hidden>IdContato</th>
            <th hidden>IdPromoção</th>
            <th>Data da Viagem</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        {newDestino.map((element) => (
          <tbody key={element.id}>
            <tr className="text-dark text-white" >
              <td hidden>{element.id}</td>
              <td hidden>{element.contato_id}</td>
              <td hidden>{element.promocoe_id}</td>
              <td>{element.dataviagem}</td>
              <td>
                <Link href={`/destino/update-destino/${element.id}`} className="btn btn-warning">Editar</Link>            
                <Link href={`/destino/delete-destino/${element.id}`} className="btn btn btn-danger">Excluir</Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>

  </main>
  </>
  );
};
 
export default editarDestino;