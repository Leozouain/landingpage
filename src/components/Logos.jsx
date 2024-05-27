import { brandLogos } from "../constants";

const Logos = () => {
  return (
    <section id="logos" className="py-10 flex flex-col mobileContainer ">
      <p className="small pb-5 m-auto">Join 4,000+ companies already growing</p>
      <ul className="flex flex-wrap gap-5 justify-center items-center">
        {brandLogos.map((e) => (
          <li key={e.id} className="flex justify-center items-center gap-3 ">
            <img src={e.logo} alt={e.name + "logo"} height={50} width={50} />
            <p className=" font-bold md:h2">{e.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Logos;
