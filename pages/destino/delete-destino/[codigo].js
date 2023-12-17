import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
 
const DeleteDestino = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const [newDestino, setNewDestino] = useState(codigo);
 
 
 
  const handleDeleteDestino = () => {
 
    axios
      .delete("http://localhost:8080/destinos/" + newDestino)
      .then(() => {
        router.push("/destino/editarDestino");
      })
      .catch((error) => {
        alert("Erro ao excluir Contato:" + error);
      });
  };
 
  return (
    <div className="container">
      <h1 className="text-black bg-white">Excluir Contato</h1>
      <form  action="Inserir" method="post" className="form-control tabela">
        <fieldset>
          <legend>ID do Contato</legend>
            <p>
              <label>ID do Contato a ser excluído:</label> <input className="form-control"  type="text" value={newDestino} onChange={(e) => setNewDestino(e.target.value)}/>
            </p>
            <p>
            <Link href={"/destino/editarDestino"} className="btn btn-primary" onClick={handleDeleteDestino}>Excluir Contato</Link>
            </p>
        </fieldset>
      </form>
    </div>
  );
};
 
export default DeleteDestino;