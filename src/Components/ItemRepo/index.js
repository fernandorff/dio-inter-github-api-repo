import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <br />
      <a href={repo.html_url} target="_blank">
        Acessar repositorio
      </a>
      <a href="#" onClick={handleRemove} className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
