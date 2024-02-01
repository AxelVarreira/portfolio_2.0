interface Props {
  title?: string;
  description?: string;
  url?: string;
}

const RepoItemComponent: React.FC<Props> = ({ title, description, url }) => {
  console.log(title);
  return (
    <div className="my-12">
      <h1>{title}</h1>
      <h2 className="font-blex text-gray-600">
        {description ?? "Sem descricao no momento parca"}
      </h2>
      <a className="text-gray-400 hover:bg-black hover:text-white" href={url}>
        Link
      </a>
    </div>
  );
};

export default RepoItemComponent;
