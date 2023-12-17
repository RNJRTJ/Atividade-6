import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
 
 
const UpdatePromocoe = () => {
  const [newPromocoe, setNewPromocoe] = useState({ id: "", preco: "", viagem: "" });
  const router = useRouter();
  const { codigo } = router.query;
 
  useEffect(() => {
    // Faça uma chamada GET para a API para obter detalhes do cliente a ser atualizado
    axios
      .get("http://localhost:8080/promocoes/" + newPromocoe.id, newPromocoe)
      .then((response) => {
        setNewPromocoe(response.data);      
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes da Promoção:", error);
      });
  }, [newPromocoe.id]);
 
  const handleInputChange = (e) => {
    setNewPromocoe({ ...newPromocoe, [e.target.name]: e.target.value });
  };
 
  const handleUpdatePromocoe = () => {
    axios
      .put("http://localhost:8080/promocoes/" + newPromocoe.id, newPromocoe)
      .then((response) => {
        router.push('/promocoe/editarPromocoe');    
   
      })
      .catch((error) => {
        console.error("Erro ao atualizar a Promoção:", error);
      });
  };
 
  return (
    <div className="container">
      <h1 className="text-black bg-white">Atualizar Promoção</h1>
      <form action="Inserir" method="post" className="form-control tabela">
        <fieldset>
          <legend>Informações da Promoção</legend>
            <p>
              <label>ID do Cliente:</label> <input className="form-control" type="text" name="id" value={newPromocoe.id = codigo} onChange={handleInputChange}/>
            </p>
            <p>
              <label>Preço:</label> <input className="form-control" type="text" name="preco" value={newPromocoe.preco} onChange={handleInputChange}/>
            </p>
            <p>
              <label>Viagem:</label> <input className="form-control" type="text" name="viagem" value={newPromocoe.viagem} onChange={handleInputChange}/>
            </p>
            <p>
              <Link href={"/promocoe/editarPromocoe"} className="btn btn-primary" onClick={handleUpdatePromocoe}>Atualizar Promoção</Link>
            </p>
        </fieldset>
      </form>
    </div>
  );
};
 
export default UpdatePromocoe;