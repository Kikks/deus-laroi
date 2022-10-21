const Clients = () => {
  return (
    <section className="grid w-full place-items-center py-5">
      <div className="grid w-full place-items-center gap-5 md:gap-10">
        <h3 className="relative text-center font-garamond text-lg font-bold uppercase text-tertiary-main before:absolute before:left-[50%] before:top-10 before:h-1 before:w-14 before:translate-x-[-50%] before:rounded-md before:bg-secondary-dark md:text-xl">
          OUR TRUSTED CLIENTELE
        </h3>

        <span className="mt-5 px-5 text-center text-sm md:mt-0 lg:px-10 lg:text-base">
          We are trusted by many satisfied clients, including
        </span>

        <div className="w-full bg-white py-10 px-5 lg:px-10">
          <div className="container grid grid-cols-5 justify-center gap-10">
            {Array.from(Array(5).keys()).map((item) => (
              <div key={item} className="h-16 w-full bg-red-500" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
