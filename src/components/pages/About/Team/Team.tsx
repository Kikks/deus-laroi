import { teamMembers } from './data';

const Team = () => {
  return (
    <section className="grid w-full place-items-center bg-secondary-light px-5 py-10 md:py-16 lg:py-20 lg:px-10">
      <div className="container flex w-full flex-col gap-14">
        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-14 lg:gap-32">
          <div className="flex-1">
            <h3 className="font-garamond text-2xl font-medium lg:text-3xl">
              Deus ‘La Roi Limited is a dynamic company with a resourceful team
              of young Nigerians working for the growth of the company and the
              development of our nation in the real estate sector.
            </h3>
          </div>

          <div className="flex-1">
            <p className="lg:text-lg lg:leading-loose">
              We’re large enough to handle projects up to $100 million, yet
              small enough that we also give professional cost advice on
              building and engineering projects. Below are the leaders of our
              company.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-between justify-items-center gap-20 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex w-[90%] max-w-[350px] flex-col items-center gap-3 md:w-full md:gap-5"
            >
              <figure className="aspect-[8/10] overflow-hidden rounded-md md:w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </figure>

              <div className="w-full">
                <h3 className="font-garamond text-xl md:text-2xl">
                  {member.name}
                </h3>
                <span className="text-sm md:text-base">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
