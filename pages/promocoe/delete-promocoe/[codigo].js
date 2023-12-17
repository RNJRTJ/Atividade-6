import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
 
const DeletePromocoe = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const [newPromocoe, setNewPromocoe] = useState(codigo);
 
 
 
  const handleDeletePromocoe = () => {
 
    axios
      .delete("http://localhost:8080/promocoes/" + newPromocoe)
      .then(() => {
        router.push("/promocoe/editarPromocoe");
      })
      .catch((error) => {
        alert("Erro ao excluir a Promoção:" + error);
      });
  };
 
  return (
    <div className="container">
      <h1 className="text-black bg-white">Excluir Cliente</h1>
      <form  action="Inserir" method="post" className="form-control tabela">
        <fieldset>
          <legend>ID da Promoção</legend>
            <p>
              <label>ID da Promoção a ser excluída:</label> <input className="form-control"  type="text" value={newPromocoe} onChange={(e) => setNewPromocoe(e.target.value)}/>
            </p>
            <p>
            <Link href={"/promocoe/editarPromocoe"} className="btn btn-primary" onClick={handleDeletePromocoe}>Excluir Cliente</Link>
            </p>
        </fieldset>
      </form>
    </div>
  );
};
 
export default DeletePromocoe;