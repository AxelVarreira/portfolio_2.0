import { useEffect, useState } from "react";
import SectionType from "../../enum/SectionType";
import { RepositoryItem } from "../../models/repo.interface";
import { Repos } from "../../api/Api"; //add
import RepoItemComponent from "../repo_item/RepoItemComponent";
import FormComponent from "../form/FormComponent";

// interface Props {
//   identificador?: SectionType;
// }

// TODO: Criar useContext desse component para fazer a "home" mandar o identificador como numero 4 e ativar o default
const SectionComponent: React.FC = (/*{ identificador }*/) => {
  const [sectionType, setSectionType] = useState(SectionType.ABOUT);
  const [repos, setRepos] = useState<RepositoryItem[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    Repos.getRepos()
      .then((repositoryItem: RepositoryItem[]) => {
        setRepos(repositoryItem);
        setError(false);
      })
      .catch(function (error) {
        setError(true);

        console.log("Error", error.message);
      });
    return () => {};
  }, []);

  // TODO: Desaclopar chamada da API e controle de estado do componente e adicionar uma controller futuramente
  function renderComponents() {
    switch (sectionType) {
      case SectionType.ABOUT:
        return process.env.REACT_APP_SOBRE;
      case SectionType.PROJECTS:
        return error ? (
          <h1>Error!</h1>
        ) : (
          repos.map((repo) => {
            return (
              <RepoItemComponent
                description={repo.description}
                title={repo.full_name}
                url={repo.html_url}
              />
            );
          })
        );

      case SectionType.CONTACT:
        return <FormComponent />;
      default:
        return "Ops, como tu conseguiu isso homi?";
    }
  }

  return (
    <div>
      <ul className="flex flex-row justify-evenly my-12">
        <li>
          <button
            onClick={() => setSectionType(SectionType.ABOUT)}
            className="cursor-pointer hover:bg-black hover:text-white"
          >
            Sobre mim
          </button>
        </li>
        <li>
          <button
            onClick={() => setSectionType(SectionType.PROJECTS)}
            className="cursor-pointer hover:bg-black hover:text-white"
          >
            Projetos
          </button>
        </li>
        <li>
          <button
            onClick={() => setSectionType(SectionType.CONTACT)}
            className="cursor-pointer hover:bg-black hover:text-white"
          >
            Contato
          </button>
        </li>
      </ul>
      {renderComponents()}
    </div>
  );
};

export default SectionComponent;
