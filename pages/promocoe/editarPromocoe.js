import "bootstrap/dist/css/bootstrap.css";
import styles from '/styles/Destino.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'; // Importe o Link para criar links de navegação

 
const editarPromocoe = () => {
  const [newPromocoe, setNewPromocoe] = useState([]);
 
  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("http://localhost:8080/promocoes", newPromocoe)
      .then((response) => {
        setNewPromocoe(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Promoções:", error);
      });
  }, []);
 
  return (
    <>
    <main className={styles.main}>
            {/* Lista Promocoe */}
            <div>
      <h1 style={{color:'white'}}>Lista de Promoção</h1>
      <p>
        <Link href="/promocoe#sectionPromocoes" className="btn btn-primary mb-3">
          Veja as Promoções!
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th hidden>Id</th>
            <th>Preço</th>
            <th>Destino</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        {newPromocoe.map((element) => (
          <tbody key={element.id}>
            <tr className="text-white bg-black">
              <td hidden>{element.id}</td>
              <td>{element.preco}</td>
              <td>{element.viagem}</td>
              <td>
                <Link href={`/promocoe/update-promocoe/${element.id}`} className="btn btn-warning">Editar</Link>            
                <Link href={`/promocoe/delete-promocoe/${element.id}`} className="btn btn btn-danger">Excluir</Link>
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
 
export default editarPromocoe;