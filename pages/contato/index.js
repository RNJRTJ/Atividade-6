import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const Contato = () => {
  const [newContato, setNewContato] = useState({ id: "", cpf: "", nome: "", email: "", telefone: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewContato({ ...newContato, [e.target.name]: e.target.value });
  };

  const handleAddContato = () => {
    axios
      .post("http://localhost:8080/api/Contato", newContato)
      .then((response) => {
        router.push("/contato/editarContato");
      })
      .catch((error) => {
        alert("Erro ao inserir contato:" + error);
      });
  };

  return (
    <>
    <div className="container">
      <h1 className="text-black bg-white">Cadastro do Contato</h1>
      <form action="Inserir" method="post" className="form-control tabela">
        <fieldset>
          <legend>Dados do Contato</legend>
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
              <Link href={"/contato/editarContato"} className="btn btn-primary" onClick={handleAddContato}>Inserir Contato</Link>
          </p>
        </fieldset>
      </form>
    </div>

    </>    
  );
};

export default Contato;
