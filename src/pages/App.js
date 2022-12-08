import { Container } from "./styles";
import ItemRepo from "../Components/ItemRepo";
import { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { api } from "../Components/services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Nao encontrado");
  };

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter((repo) => repo.id !== id));
  };

  return (
    <Container>
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
