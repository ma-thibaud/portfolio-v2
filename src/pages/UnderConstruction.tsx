const UnderConstruction = () => {
  return (
    <div className="flex flex-col h-screen bg-yellow-400">
      <header className="py-5 text-center text-sm md:text-base">
        mathiasthibaud.com
      </header>
      <main className="flex-1 flex items-center justify-center overflow-y-auto text-center p-5">
        <div>
          <h1 className="text-xl md:text-3xl font-bold">
            🚧 UNDER CONSTRUCTION 🚧
          </h1>
          <h2 className="mt-6 text-base md:text-xl">
            We are currently working on this page
          </h2>
        </div>
      </main>
      <footer className="py-5 text-center bg-teal-800 text-white text-sm md:text-base">
        Designed & Built by Mathias Thibaud{" "}
      </footer>
    </div>
  );
};

export default UnderConstruction;
