import { ReactElement, useEffect, useState } from "react";
import SectionType from "../../enum/SectionType";
import { RepositoryItem } from "../../models/repo.interface";
import { Repos } from "../../api/Api"; //add
import RepoItemComponent from "../repo_item/RepoItemComponent";

interface Props {
  identificador?: SectionType;
}

// TODO: Criar useContext desse component para fazer a "home" mandar o identificador como numero 4 e ativar o default
const SectionComponent: React.FC<Props> = ({ identificador }) => {
  const [texto, setTexto] = useState(process.env.REACT_APP_SOBRE);
  const [sectionType, setSectionType] = useState(SectionType.ABOUT);
  const [repos, setRepos] = useState<RepositoryItem[]>([]);

  useEffect(() => {
    Repos.getRepos().then((data) => {
      setRepos(data);
    });
    return () => {};
  }, []);

  useEffect(() => {
    return () => {};
  }, [sectionType]);

  // TODO: Desaclopar chamada da API e controle de estado do componente e adicionar uma controller futuramente
  function trocaTexto(identificador: SectionType) {
    switch (identificador) {
      case SectionType.ABOUT:
        setSectionType(SectionType.ABOUT);
        setTexto(process.env.REACT_APP_SOBRE ?? "");
        break;
      case SectionType.PROJECTS:
        // TODO: Adicionar chamada a API do Github para pegar projetos]
        setSectionType(SectionType.PROJECTS);
        break;
      case SectionType.CONTACT:
        setSectionType(SectionType.CONTACT);
        // TODO: Adicionar integracao com e-mail e whatsapp
        setTexto(process.env.REACT_APP_CONTATO ?? "");
        break;
      default:
        setTexto("Ops, como tu conseguiu isso homi?");
    }
  }

  return (
    <div>
      <ul className="flex flex-row justify-between my-12">
        <li>
          <button
            onClick={() => trocaTexto(SectionType.ABOUT)}
            className="cursor-pointer hover:bg-black hover:text-white"
          >
            Sobre mim
          </button>
        </li>
        <li>
          <button
            onClick={() => trocaTexto(SectionType.PROJECTS)}
            className="cursor-pointer hover:bg-black hover:text-white"
          >
            Projetos
          </button>
        </li>
        <li>
          <button
            onClick={() => trocaTexto(SectionType.CONTACT)}
            className="cursor-pointer hover:bg-black hover:text-white"
          >
            Contato
          </button>
        </li>
      </ul>

      <p>
        {sectionType !== SectionType.PROJECTS
          ? texto
          : repos.map((repo) => {
              return (
                <RepoItemComponent
                  description={repo.description}
                  title={repo.full_name}
                  url={repo.html_url}
                />
              );
            })}
      </p>
    </div>
  );
};

export default SectionComponent;
