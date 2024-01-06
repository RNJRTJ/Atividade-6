import "bootstrap/dist/css/bootstrap.css";
import styles from '/styles/Destino.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Link from 'next/link'; // Importe o Link para criar links de navegação

 
const editarContato = () => {
  const [newContato, setNewContato] = useState([]);
 
  useEffect(() => {
    // Faça uma chamada GET para a API Spring Boot
    axios
      .get("http://localhost:8080/api/Contato", newContato)
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
    {/* Lista Contato */}
    <div>
      <h1 style={{color:'white'}}>Lista de Contatos</h1>
      <p>
        <Link href="/contato" className="btn btn-primary mb-3">
          Cadastrar Contato
        </Link>
      </p>
      <table className="table container tabela">
        <thead>
          <tr>
            <th hidden>Id</th>
            <th>Cpf</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Editar/Excluir</th> 
          </tr>
        </thead>
        {newContato.map((element) => (
          <tbody key={element.id}>
            <tr style={{ backgroundColor: "black" , color:'white'}}>
              <td hidden>{element.id}</td>
              <td>{element.cpf}</td>
              <td>{element.nome}</td>
              <td>{element.email}</td>
              <td>{element.telefone}</td>
              <td>
                <Link href={`/contato/update-contato/${element.id}`} className="btn btn-warning">Editar</Link>            
                <Link href={`/contato/delete-contato/${element.id}`} className="btn btn btn-danger">Excluir</Link>
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
 
export default editarContato;