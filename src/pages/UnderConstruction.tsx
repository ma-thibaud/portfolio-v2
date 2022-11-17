const UnderConstruction = () => {
  return (
    // <main className="flex-1 flex items-center justify-center overflow-y-auto text-center p-5">
    //   <div className="">
    //     <h1 className="text-3xl sm:text-4xl font-bold">
    //       🚧 UNDER CONSTRUCTION 🚧
    //     </h1>
    //     <h2 className="mt-6 text-lg">We are currently working on this page</h2>
    //   </div>
    // </main>
    <div className="bg-yellow-400 flex-1 flex items-center justify-center">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-teal-800">Coming Soon</h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Under construction.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            We are currently working on the new website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
