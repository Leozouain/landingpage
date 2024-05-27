import { brandLogos, features } from "../constants";

const Features = () => {
  return (
    <section className="mobileContainer my-5 ">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="small">Features</p>
        <h3 className="h3 ">Analytics that feels like it’s from the future</h3>
        <p className="p md:max-w-[60%]">
          {" "}
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div>
        <ul
          className="flex flex-col flex-wrap gap-5 md:flex-row justify-center 
        items-center text-center"
        >
          {features.map((e) => (
            <li
              key={e.id}
              className="w-[384px] p-5 flex flex-col m-auto justify-center items-center"
            >
              <img
                src={e.icon}
                alt={e.title + "icon"}
                width={25}
                className="my-3"
              />
              <h3 className="cardText my-2">{e.title}</h3>
              <p className="p">{e.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Features;
