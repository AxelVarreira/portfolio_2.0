interface Props {
  title?: string;
  description?: string;
  url?: string;
}

const RepoItemComponent: React.FC<Props> = ({ title, description, url }) => {
  console.log(title);
  return (
    <div className="my-12 ring-offset-2 ring-2 ring-gray-100 rounded p-6">
      <a className="" href={url}>
        <h1>{title}</h1>
        <h2 className="">{description ?? "Sem descricao no momento parca"}</h2>
      </a>
    </div>
  );
};

export default RepoItemComponent;
