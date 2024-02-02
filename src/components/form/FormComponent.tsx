const FormComponent: React.FC = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("Submitei");
      }}
      className="flex flex-col"
    >
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Contato para negocios
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Assunto
            </label>
            <div className="mt-2">
              <input
                placeholder=" Com quantos ovos se faz uma galinha?"
                type="text"
                name="assunto"
                id="assunto"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              e-mail
            </label>
            <div className="mt-2">
              <input
                placeholder=" mateuzinho.picudo007@cobol.com.br"
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mensagem
            </label>
            <div className="mt-2">
              <textarea
                placeholder=" Escreve ai caraio"
                id="email_text"
                name="email_text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <button className="rounded px-6 py-3 ring ring-gray-100">Enviar</button>
    </form>
  );
};

export default FormComponent;
