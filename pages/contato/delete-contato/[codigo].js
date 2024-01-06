import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
 
const DeleteContato = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const [newContato, setNewContato] = useState(codigo);
 
 
 
  const handleDeleteContato = () => {
 
    axios
      .delete("http://localhost:8080/api/Contato" + newContato)
      .then(() => {
        router.push("/contato/editarContato");
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
              <label>ID do Contato a ser excluído:</label> <input className="form-control"  type="text" value={newContato} onChange={(e) => setNewContato(e.target.value)}/>
            </p>
            <p>
            <Link href={"/contato/editarContato"} className="btn btn-primary" onClick={handleDeleteContato}>Excluir Contato</Link>
            </p>
        </fieldset>
      </form>
    </div>
  );
};
 
export default DeleteContato;