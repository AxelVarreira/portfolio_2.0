import profile from "../../images/profile.png";

export default function HeaderComponent() {
  return (
    <header className="bg-white py-8">
      <div className="container  mx-auto px-72">
        <div className="flex items-end justify-between ">
          <img
            className="max-w-none rounded-full profile-image"
            src={profile}
            alt="Riley Freeman from the boondocks as me."
          />
          <div className="flex flex-col items-end">
            <h1> {"{Axel Felix}"}</h1>
            <h1 className="text-gray-400">
              Analista e desenvolvedor de software
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
