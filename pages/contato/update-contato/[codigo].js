import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
 
const UpadteContato = () => {
  const [newContato, setNewContato] = useState({ cpf: "", name: "", email: "", telefone: "" });
  const router = useRouter();
  const { codigo } = router.query;
 
  useEffect(() => {
    // Faça uma chamada GET para a API para obter detalhes do cliente a ser atualizado
    axios
      .get("http://localhost:8080/contatos/" + newContato.id, newContato)
      .then((response) => {
        setNewContato(response.data);      
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do contatos:", error);
      });
  }, [newContato.id]);
 
  const handleInputChange = (e) => {
    setNewContato({ ...newContato, [e.target.name]: e.target.value });
  };
 
  const handleUpdateContato = () => {
    axios
      .put("http://localhost:8080/contatos/" + newContato.id, newContato)
      .then((response) => {
        router.push('/contato/editarContato');    
      })
      .catch((error) => {
        console.error("Erro ao atualizar Contato:", error);
      });
  };
 
  return (
    <div className="container">
      <h1 className="text-black bg-white">Atualizar Cliente</h1>
      <form action="Inserir" method="post" className="form-control tabela">
        <fieldset>
          <legend>Dados do Contato</legend>
            <p>
              <label>ID do Cliente:</label> <input className="form-control" type="text" name="id" value={newContato.id = codigo} onChange={handleInputChange}/>
            </p>
            <p>
              <label>Cpf:</label> <input className="form-control" type="text" name="cpf" value={newContato.cpf} onChange={handleInputChange}/>
            </p>
            <p>
              <label>Nome:</label> <input className="form-control" type="text" name="nome" value={newContato.nome} onChange={handleInputChange}/>
            </p>
            <p>
              <label>Email:</label> <input className="form-control" type="text" name="email" value={newContato.email} onChange={handleInputChange}/>
            </p>
            <p>
              <label>Telefone:</label> <input className="form-control" type="text" name="telefone" value={newContato.telefone} onChange={handleInputChange}/>
            </p>
            <p>
              <Link href={"/contato/editarContato"} className="btn btn-primary" onClick={handleUpdateContato}>Atualizar Contato</Link>
            </p>
        </fieldset>
      </form>
    </div>
  );
};
 
export default UpadteContato;