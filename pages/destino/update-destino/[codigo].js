import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
 
 
const UpdateDestino = () => {
  const [newDestino, setNewDestino] = useState({id: "", dataviagem: "", contato_id: "", promocoe_id: "" });
  const router = useRouter();
  const { codigo } = router.query;
 
  useEffect(() => {
    // Faça uma chamada GET para a API para obter detalhes do cliente a ser atualizado
    axios
      .get("http://localhost:8080/destinos/" + newDestino.id, newDestino)
      .then((response) => {
        setNewDestino(response.data);      
      })
      .catch((error) => {
        console.error("Erro ao buscar detalhes do Destino:", error);
      });
  }, [newDestino.id]);
 
  const handleInputChange = (e) => {
    setNewDestino({ ...newDestino, [e.target.name]: e.target.value });
  };
 
  const handleUpdateDestino = () => {
    axios
      .put("http://localhost:8080/destinos/" + newDestino.id, newDestino)
      .then((response) => {
        router.push('/destino/editarDestino');    
   
      })
      .catch((error) => {
        console.error("Erro ao atualizar o Destino:", error);
      });
  };
 
  return (
    <div className="container">
      <h1 className="text-black bg-white">Atualizar Destino</h1>
      <form action="Inserir" method="post" className="form-control tabela">
        <fieldset>
          <legend>Informações do Destino</legend>
            <p>
              <label>ID do Destino:</label> <input className="form-control" type="text" name="id" value={newDestino.id = codigo} onChange={handleInputChange}/>
            </p>
            <p>
              <label>IdContato:</label> <input className="form-control" type="Contato" name="contato_id" value={newDestino.contato_id} onChange={handleInputChange}/>
            </p>
            <p>
              <label>IdPromoção:</label> <input className="form-control" type="Promocoe" name="promocoe_id" value={newDestino.promocoe_id} onChange={handleInputChange}/>
            </p>
            <p>
              <label>Data da Viagem:</label> <input className="form-control" type="date" name="dataviagem" value={newDestino.dataviagem} onChange={handleInputChange}/>
            </p>
            <p>
              <Link href={"/destino/editarDestino"} className="btn btn-primary" onClick={handleUpdateDestino}>Atualizar Destino</Link>
            </p>
        </fieldset>
      </form>
    </div>
  );
};
 
export default UpdateDestino;